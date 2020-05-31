import React, { useState, useEffect } from 'react';
import Logout from '../../components/logout/userLogout';
import cartAPI from '../../utils/API/cart';
import orderAPI from '../../utils/API/order';
import List from '../../components/cartList/cartList';
import Nav from '../../components/Navbar/nav';
import {useHistory} from "react-router-dom";
import './cart.css';

const Cart = () => {
	const [userId, setUserId] = useState(localStorage.getItem("userId"));
	const [cartObject, setCartObject] = useState();
	const [displayStatus, setDisplayStatus] = useState('');
	const [cartEmpty, setCartEmpty] = useState(true);
	const history = useHistory();
	useEffect(() => {
		// console.log(userId)
		cartAPI.getCart(userId).then((res) => {
			console.log(res.data.products);
			if (res.data.products.length > 0){
				setCartEmpty(false);
				setCartObject(res.data);
				
			}
			setDisplayStatus('none');
		});
	}, []);
	
	function handleOnClick() {
		const { _id, ...newData } = cartObject;
		orderAPI.createOrder(newData)
		.then(() => {
			// console.log(userId);
			cartAPI.deleteCart(userId).then(
				history.push("/order")
			)
		});
	}

	function handleClick() {
		if (displayStatus === 'none') {
			setDisplayStatus('block');
		}
		handleOnClick();
	}
	

	return (
		
		<div>
			<Nav />
			<div className="container">
				<div className="text-center cart-header">
					<h1 className="cart-h1">Cart</h1>
				</div>
				<div className="row all">
					<div className="col-lg-8">
						<div className="card cart-card">
							<ul className="list-group list-group-flush">

									{cartEmpty ? (
										<h3 className="text-dark text-center">Nothing in cart...</h3>
									) : (
										<List />										
										)}
								
							</ul>
						</div>
					</div>
					<div className="col-lg-4 cart-summary">
						<div className="card rounded-0">
							<h5 className="card-header text-center">Summary</h5>
							<div className="card-body">
								<h5 className="card-title">Your pickup time: </h5>
								<p className="card-text">Order type: Pay in person</p>
								<h5 className="card-text">total: $$</h5>
								<button disabled={! cartObject} className="btn btn-primary" onClick={handleClick}>
									Place Order
								</button>

								<p className="orderplaced" id="orderplaced" style={{ display: displayStatus }}>
									order placed successfully
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
