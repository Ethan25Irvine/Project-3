import React, { useState, useEffect } from 'react';
import Orders from '../../components/orders/orders';
import Nav from '../../components/Navbar/nav';
import { Redirect } from 'react-router-dom';
import List from '../../components/cartList/cartList';
import orderAPI from '../../utils/API/order';

const Dashboard = () => {
	function delete_cookie(name) {
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
	function redirect() {
		window.location.href = '/login';
	}

	function handleLogout() {
		delete_cookie('admin');
		redirect();
	}

	return (
		<div>
			<Nav />
			<div className="text-center cart-header">
				<h1 className="cart-h1">ORDERS</h1>
			</div>
			<div className="container">
				<ul class="list-group">
					<li className="list-group-item">
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
