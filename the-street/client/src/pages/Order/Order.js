import React, { useState, useEffect } from 'react';
import MenuItem from '../../components/MenuItem';
import drinkMenu from '../../drinks.json';
import './order.css';
import foodMenu from '../../foods.json';
import { Link, useLocation } from 'react-router-dom';
import Nav from '../../components/Navbar/nav';
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
			<div className="header-background">
				<Nav />
				<div className="header">
					<div className="container">
						<h1 className="display-4 text-center header">Place your order for pickup</h1>
					</div>
				</div>
			</div>
			<div className="container text-center">
				<div className="products row text-center">
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
				<div className="row products-food text-center">
					<div className="col-lg-3" />
					{foods.map((item) => (
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
					<div className="col-lg-3" />
				</div>
				<br />
			</div>
		</div>
	)
}

export default Order;
