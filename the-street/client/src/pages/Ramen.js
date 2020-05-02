import React, { Component } from 'react';
import items from '../menuitems.json';
import Product from '../components/Product';
import './ramen.css';
class Ramen extends Component {
	state = {
		items
	};
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-lg-12 navbars">
						<div className="row nav-items">
							<div className="col-lg-2" />
							<div className="col-lg-2">Order</div>
							<div className="col-lg-2">Menu</div>
							<div className="col-lg-2">About Us</div>
							<div className="col-lg-2">Login</div>
						</div>
					</div>
				</div>
				<div className="container product-card">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h1>Ramen</h1>
						</div>
					</div>
					<br />

					<div class="row mb-5">
						<div class="col-md-8">
							<div class="row">
								<div class="col-md-12 mb-4">
									<img alt="" class="img-thumbnail p-0 border-0 image-main" src={items[3].image} />
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="card options newborder">
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
									<br />
									<br />
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
									<button type="submit" class="btn btn-primary">
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<footer>
					<div className="row">
						<div className="col-lg-12 navbars" />
					</div>
				</footer>
			</div>
		);
	}
}

export default Ramen;
