import React, { Component } from 'react';
import items from '../../menuitems.json';
import Product from '../../components/Product';
import './smoothie.css';
import { Link, useLocation } from 'react-router-dom';

function Smoothie() {
	return (
		<div className="background">
			<div className="row">
				<div className="col-lg-12 navbars">
					<div className="row nav-items">
						<div className="col-lg-2" />
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
						<h1 className="heading">Smoothies</h1>
					</div>
				</div>
				<br />

				<div class="row mb-5">
					<div class="col-md-8">
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
					<div class="col-md-4">
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
								<br />
								<div class="form-check form-check-inline">
									<input
										class="form-check-input"
										type="checkbox"
										id="inlineCheckbox1"
										value="option1"
									/>
									<label class="form-check-label" for="inlineCheckbox1">
										1
									</label>
								</div>
								<div class="form-check form-check-inline">
									<input
										class="form-check-input"
										type="checkbox"
										id="inlineCheckbox2"
										value="option2"
									/>
									<label class="form-check-label" for="inlineCheckbox2">
										2
									</label>
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

export default Smoothie;
