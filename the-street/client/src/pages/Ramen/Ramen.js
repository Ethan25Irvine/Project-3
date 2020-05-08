import React, { useState, useEffect } from 'react';
import items from '../../foods.json';
import Product from '../../components/Product';
import { Link, useLocation } from 'react-router-dom';
import './ramen.css';
import Nav from '../../components/Navbar/nav';

function Ramen() {
	function scrollup() {
		window.scrollTo(0, 0);
	}
	scrollup();
	return (
		<div>
			<Nav />
			<div className="container product-card">
				<div className="row">
					<div className="col-lg-12 text-center heading">
						<h1 className="heading">Ramen</h1>
					</div>
				</div>
				<br />

				<div class="row mb-5">
					<div class="col-md-8">
						<div class="row">
							<div class="col-md-12 mb-4">
								<img
									alt=""
									class="img-thumbnail p-0 border-0 image-main"
									src="https://i.pinimg.com/originals/62/ec/87/62ec87229d24ee2f7f45d701e710227b.jpg"
								/>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class=" options newborder">
							<br />
							<form>
								<div class="form-group">
									<br />
									<label for="exampleFormControlSelect1">Spice level</label>
									<select class="form-control" id="exampleFormControlSelect1">
										<option>Spicy</option>
										<option>Mild</option>
										<option>Not spicy</option>
										<option>Veggie</option>
									</select>
								</div>

								<div class="form-group">
									<br />
									<label for="FormControlSelect">Toppings</label>
									<select class="form-control" id="FormControlSelect">
										<option>Dumplings</option>
										<option>Rice Cakes</option>
										<option>Dumplings + Rice Cakes</option>
										<option>None</option>
									</select>
								</div>
								<br />
								<div class="form-group">
									<label for="Pickup-time">Pickup Time</label>
									<input class="form-control" id="Pickup-time" aria-describedby="Pickup-time" />
								</div>
								<br />
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

export default Ramen;
