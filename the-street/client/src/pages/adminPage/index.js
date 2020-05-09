import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/nav';


import orderAPI from '../../utils/API/order';
import cart from '../../utils/API/cart';

const Dashboard = () => {
	

	// useEffect(() => {
	// 	orderAPI.getOrders(){
	// 		setDisplay
	// 	}
	// }, []);

	return (
		<div>
			<Nav />
			<div className="text-center cart-header">
				<h1 className="cart-h1">ORDERS</h1>
			</div>
			<div className="container">
				<ul class="list-group">
					<li class="list-group-item">
						<div className="row">
							<div className="col-lg-3">
								<div className="customer-name">
									<h4>CUSTOMER NAME</h4>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="product-name">
									<h3>PRODUCT NAME</h3>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="product-modifiers">
									<h3>LIST OF MODIFIERS</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3" />
							<div className="col-lg-9">COMMENTS COMMENTS COMMENTS COMMENTS COMMENTS</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
