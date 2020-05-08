import React, { useEffect, useState } from 'react';

import Product from '../../components/Product';
import './smoothie.css';
import { Link, useLocation } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../flavorList.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';

function Smoothie() {
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
		<div>
			<div>
				<Nav />
				<div className="container product-card">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h1 className="heading">Smoothies</h1>
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
										src="https://i.imgur.com/Oqvf7xS.jpg"
									/>
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class=" options newborder">
								<form>
									<div class="form-group">
										<label for="exampleFormControlSelect1">Size</label>
										<select class="form-control" id="exampleFormControlSelect1">
											<option id="4.75">Small ($4.75)</option>
											<option id="5.25">Large ($5.25)</option>
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
									<br />
									<div class="form-group">
										<label for="exampleFormControlSelect1">Milk or Juice</label>
										<select class="form-control" id="exampleFormControlSelect1">
											<option>Apple Juice ( fruit smoothies)</option>
											<option>Whole Milk</option>
											<option>Soy Milk</option>
											<option>Almond Milk</option>
											<option>Coconut Milk</option>
											<option>Rice Milk</option>
											<option>Green Tea (fruit smoothies)</option>
											<option>Black Tea (fruit smoothies)</option>
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
		</div>
	);
}

export default Smoothie;
