import React, { useEffect, useState } from 'react';

import Product from '../../components/Product';
import '../Smoothie/smoothie.css';
import { Link, useLocation } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../teas.json';
import Toppings from '../../toppings.json';

function Coffee() {
	const [ flavors, setFlavors ] = useState([]);
	const [ toppings, setToppings ] = useState([]);

	useEffect(() => {
		setFlavors(flavorList);
		setToppings(Toppings);
	}, []);

	return (
		<div className="background">
			<div className="row">
				<div className="col-lg-12 navbars">
					<div className="row nav-items">
						<div className="col-lg-2 mr" />
						<div className="col-lg-2">
							<Link to="/order" className="link">
								<div>Order</div>
							</Link>
						</div>
						<div className="col-lg-2">
							<Link to="/menu" className="link">
								Menu
							</Link>
						</div>
						<div className="col-lg-2">
							<Link to="/about" className="link">
								About Us
							</Link>
						</div>
						<div className="col-lg-2">
							<Link to="/login" className="link">
								Login
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container product-card">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="heading">Coffee</h1>
					</div>
				</div>
				<br />

				<div class="row mb-5">
					<div class="col-md-7">
						<div class="row">
							<div class="col-md-12 mb-4 ">
								<img
									alt=""
									class="img-thumbnail p-0 border-0 image-main smoothies"
									src="https://i.imgur.com/k5IkYI1.jpg"
								/>
							</div>
						</div>
					</div>
					<div class="col-md-5">
						<div class="card options newborder">
							<form>
								<div class="form-group">
									<br />
									<label for="exampleFormControlSelect1">Size</label>
									<select class="form-control" id="exampleFormControlSelect1">
										<option>Small</option>
										<option>Large</option>
									</select>
								</div>
								<br />
								<div class="form-group">
									<br />
									<label for="CoffeeChoice">Type</label>
									<select class="form-control" id="CoffeeChoice">
										<option>Hot Coffee</option>
										<option>Iced Coffee</option>
										<option>Lattes</option>
										<option>Coffee Smoothie</option>
										<option>Mocha Smoothie</option>
										<option>Coffee Milk Tea</option>
										<option>Vietnamese Iced Coffee</option>
									</select>
								</div>
								<br />
								Toppings
								<div className="toppings">
									{toppings.map((topping) => (
										<div className="indivflavor">
											<Flavor name={topping} />
										</div>
									))}
								</div>
								<br />
								<button type="submit" class="btn btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coffee;
