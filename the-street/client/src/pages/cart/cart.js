import React, { useState, useEffect } from 'react';
import Logout from '../../components/logout/userLogout';
import cartAPI from '../../utils/API/cart';
import orderAPI from '../../utils/API/order';
import List from '../../components/cartList/cartList';
import Nav from '../../components/Navbar/nav';
import './cart.css';

const Cart = () => {
	const [ userId, setUserId ] = useState('5ea7a27ded515903068a7f0f');
	const [ cartObject, setCartObject ] = useState();
	const [ displayStatus, setDisplayStatus ] = useState('');

	useEffect(() => {
		cartAPI.getCart(userId).then((res) => {
			// console.log(res.data);
			const data = res.data;
			setCartObject(data);
			setDisplayStatus('none');
		});
	}, []);

	function handleOnClick() {
		orderAPI.createOrder(cartObject).then((res) => {
			alert('order was sent');
		});
	}

	function handleClick() {
		if (displayStatus === 'none') {
			setDisplayStatus('block');
		}
		console.log(displayStatus);
	}

	return (
		<div>
			<Nav />
			<Logout />
			{/* <h1>Cart</h1>
			<ol>
				{cartObject ? (
					cartObject.products.map((res) => {
						return <List product={res.productName} addons={res.modifiers} newKey={res.productName} />;
					})
				) : (
					<p>Loading...</p>
				)}
			</ol>
			<button onClick={handleOnClick}>Submit Order</button> */}

			<div className="container">
				<div className="text-center cart-header">
					<h1 className="cart-h1">Cart</h1>
				</div>
				<div className="row all">
					<div className="col-lg-8">
						<div className="card cart-card">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<div className="row">
										<div className="col-lg-3">
											<img src="https://i.imgur.com/Oqvf7xS.jpg" className="product-cart-image" />
										</div>
										<div className="col-lg-8 item-name item-properties">Smoothie</div>
									</div>
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
								<button href="#" className="btn btn-primary" onClick={handleClick}>
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
