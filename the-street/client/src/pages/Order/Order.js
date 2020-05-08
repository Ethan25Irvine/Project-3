import React, { useState, useEffect } from 'react';
import MenuItem from '../../components/MenuItem';
import drinkMenu from '../../drinks.json';
import './order.css';
import foodMenu from '../../foods.json';
function Order() {
	// Setting this.state.friends to the friends json array
	const [ drinks, setDrinks ] = useState([]);
	const [ foods, setFoods ] = useState([]);

	useEffect(() => {
		setDrinks(drinkMenu);
		setFoods(foodMenu);
	}, []);
	// Map over this.state.items and render a FriendCard component for each friend object

	return (
		<div>
			<div className="row navbars">
				<div className="col-lg-12 ">
					<div className="row nav-items">
						<div className="col-lg-2 mr" />
						<div className="col-lg-2">Order</div>
						<div className="col-lg-2">Menu</div>
						<div className="col-lg-2">About Us</div>
						<div className="col-lg-2">Login</div>
					</div>
				</div>
			</div>
			<div class="jumbotron jumbotron-fluid header">
				<div class="container">
					<h1 class="display-4 text-center header">Place your order for pickup</h1>
				</div>
			</div>
			<div className="products row">
				{drinks.map((item) => (
					<div className="col-lg-3 product">
						<MenuItem
							id={item.id}
							key={item.id}
							name={item.name}
							image={item.image}
							description={item.description}
							url={item.url}
						/>
					</div>
				))}
			</div>
			<div className="row products-food ">
				{foods.map((item) => (
					<div className="col-lg-4 product">
						<MenuItem
							id={item.id}
							key={item.id}
							name={item.name}
							image={item.image}
							description={item.description}
							url={item.url}
						/>
					</div>
				))}
			</div>
			<br />
		</div>
	);
}

export default Order;
