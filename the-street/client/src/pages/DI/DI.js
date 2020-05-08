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
									<label for="size">Size</label>
									<select class="form-control" id="size">
										<option id="4.00">Tiny ($4.00)</option>
										<option id="5.00">Mini ($5.00)</option>
										<option id="6.00">Small ($6.00)</option>
										<option id="10.00">Medium ($10.00)</option>
										<option id="12.00">Large ($12.00)</option>
										<option id="16.00">Extra Large ($16.00)</option>
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

export default DI;
