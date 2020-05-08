import React, { useEffect, useState } from 'react';

import Product from '../../components/Product';
import '../Smoothie/smoothie.css';
import { Link, useLocation } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../slushieFlavors.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';

function Slushie() {
	const [ flavors, setFlavors ] = useState([]);
	const [ toppings, setToppings ] = useState([]);
	function scrollup() {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		setFlavors(flavorList);
		setToppings(Toppings);
		scrollup();
	}, []);

	return (
		<div className="background">
			<Nav />
			<div className="container product-card">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="heading">Slushies</h1>
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
									src="https://i.imgur.com/HUCztvl.jpg"
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
										<option id="3.50">Small ($3.50)</option>
										<option id="4.00">Large ($4.00)</option>
									</select>
								</div>
								<br />
								<div>Flavors</div>
								<div className="flavors">
									{flavors.map((flavor) => (
										<div className="indivflavor">
											<Flavor name={flavor} />
										</div>
									))}
								</div>
								<div class="form-group">
									<br />
									<label for="exampleFormControlSelect1">Milk or Juice</label>
									<select class="form-control" id="exampleFormControlSelect1">
										<option>Apple Juice (most common)</option>
										<option>Whole Milk</option>
										<option>Soy Milk</option>
										<option>Almond Milk</option>
										<option>Coconut Milk</option>
										<option>Rice Milk</option>
										<option>Green Tea</option>
										<option>Black Tea</option>
									</select>
								</div>
								Toppings
								<div className="toppings">
									{toppings.map((topping) => (
										<div className="indivflavor">
											<Flavor name={topping} />
										</div>
									))}
								</div>
								<br />
								<div class="form-group">
									<label for="Pickup-time">Pickup Time</label>
									<input class="form-control" id="Pickup-time" aria-describedby="Pickup-time" />
								</div>
								<div class="form-group">
									<label for="comments">Comments</label>
									<input
										class="form-control"
										id="comments"
										aria-describedby="comments"
										placeholder=""
									/>
								</div>
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

export default Slushie;
