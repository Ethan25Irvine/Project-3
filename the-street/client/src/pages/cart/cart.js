import React, { useState, useEffect } from 'react';
import Logout from '../../components/logout/userLogout';
import cartAPI from '../../utils/API/cart';
import orderAPI from '../../utils/API/order';
import List from '../../components/cartList/cartList';
import Nav from '../../components/Navbar/nav';
import {Redirect, useHistory} from "react-router-dom";
import './cart.css';

const Cart = () => {
	const [userId, setUserId] = useState(localStorage.getItem("userId"));
	const [cartObject, setCartObject] = useState();
	const [displayStatus, setDisplayStatus] = useState('');
	const history = useHistory();
	useEffect(() => {
		console.log(userId)
		cartAPI.getCart(userId).then((res) => {
			console.log(res.data);
			// const data = res.data;
			setCartObject(res.data);
			setDisplayStatus('none');
		});
	}, []);
	
	function handleOnClick() {
		const { _id, ...newData } = cartObject;
		
		// console.log(newData);
		orderAPI.createOrder(newData)
		.then(() => {
			console.log(userId);
			cartAPI.deleteCart(userId).then(
				history.push("/")
			)
		});
	}

	function handleClick() {
		if (displayStatus === 'none') {
			setDisplayStatus('block');
		}
		handleOnClick();
		// console.log(displayStatus);
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
								<li className="list-group-item">
									{cartObject ? (
										cartObject.products.map((res) => {
											return <List product={res.productName} addons={res.modifiers} newKey={res.productName} />;
										})
									) : (
											<h3 className="text-dark">Nothing in cart...</h3>
										)}
								</li>
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
