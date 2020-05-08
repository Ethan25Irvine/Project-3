import React, { useEffect, useState } from 'react';

import Product from '../../components/Product';
import './di.css';
import { Link, useLocation } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import Nav from '../../components/Navbar/nav';
import Toppings from '../../toppings.json';

function DI() {
	const [ toppings, setToppings ] = useState([]);
	function scrollup() {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		setToppings(Toppings);
		scrollup();
	}, []);

	return (
		<div className="background">
			<Nav />
			<div className="container product-card">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="heading">Diamond Ice</h1>
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
									src="https://i.imgur.com/yNAQcdd.jpg"
								/>
							</div>
						</div>
					</div>
					<div class="col-md-5">
						<div class=" options newborder">
							<form>
								<div class="form-group">
									<br />
									<label for="size">Size</label>
									<select class="form-control" id="size">
										<option>Tiny</option>
										<option>Mini</option>
										<option>Small</option>
										<option>Medium</option>
										<option>Large</option>
										<option>Extra Large</option>
									</select>
								</div>
								<br />
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
									<br />
									<label for="milk">Size</label>
									<select class="form-control" id="milk">
										<option>Tiny</option>
										<option>Mini</option>
										<option>Small</option>
										<option>Medium</option>
										<option>Large</option>
										<option>Extra Large</option>
									</select>
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

export default DI;
