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
	const [orderPlaced, setOrderPlaced] = useState(false);
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		// console.log(userId)
		let newPrice = 0;
		cartAPI.getCart(userId).then((res) => {
			console.log(res.data);
			res.data.products.map(data => {
				newPrice = newPrice + data.price
				setTotalPrice(newPrice)
			});
			if (res.data.products.length > 0){
				setCartEmpty(false);
				setCartObject(res.data);
				
			}
			setDisplayStatus('none');
		});
	}, []);
	
	function handleOnClick(event) {
		event.preventDefault();
		const { _id, ...newData } = cartObject;
		orderAPI.createOrder(newData)
		.then(() => {
			// console.log(userId);
			cartAPI.deleteCart(userId).then(
				setDisplayStatus('block'),
				setOrderPlaced(true)
			)
		});
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
							<h5 className="card-header text-center">Details</h5>
							<div className="card-body">
								<h5 className="card-title">All orders will be ready within 10 minutes of placing order </h5>
								<h5 className="card-text">All orders will be paid in store</h5>
								<p className="card-text">(Also we accept card payments over the phone)</p>
								<div className="mb-3">
									<p className="total"><strong>Subtotal:</strong> ${totalPrice.toFixed(2)}</p>
									<p className="total border-bottom border-dark"><strong>Tax:</strong> ${(totalPrice*0.078).toFixed(2)}</p>
									<p className="total"><strong>Ammount Due</strong> ${(totalPrice*0.078 + totalPrice).toFixed(2)}</p>
								</div>
								<button disabled={! cartObject || orderPlaced} className="btn btn-dark" onClick={handleOnClick}>
									Place Order
								</button>

								<p className="orderplaced text-success" id="orderplaced" style={{ display: displayStatus }}>
									Order placed successfully
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
