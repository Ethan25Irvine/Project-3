import React, { useEffect, useState } from 'react';
import API from "../../utils/API/cart";

import Product from '../../components/Product';
import '../Smoothie/smoothie.css';
import { Link, useLocation } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../teas.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';

function Tea() {
	const [ modifierArray, setModifierArray ] = useState([]);
	const [ product ] = useState('Tea');
	const [ size, setSize ] = useState({ modifierName: 'Small' });
	const [ comment, setComment ] = useState('');
	const [ flavors, setFlavors ] = useState(flavorList);
	const [ toppings, setToppings ] = useState(Toppings);
	const [ liquid, setLiquid ] = useState({ modifierName: 'Apple Juice' });
	const [user, setUser] = useState();
	const [username, setUserName] = useState();

	function scrollup() {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		scrollup();
		setUser(localStorage.getItem("userId"));
		setUserName(localStorage.getItem("userName"));
	}, []);
	function sizeChange(event) {
		const { value } = event.target;
		setSize({ modifierName: value });
	}

	function commentChange(event) {
		const { value } = event.target;
		setComment(value);
	}

	function liquidOnCLick(event) {
		const { value } = event.target;
		setLiquid({ modifierName: value });
	}

	function flavorOnClick(event) {
		const { name, checked } = event.target;
		console.log(checked);

		setModifierArray(function(previousFlavors) {
			return { ...previousFlavors, [name]: checked };
		});
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		let newFlavorArray = [];
		for (let key in modifierArray) {
			if (modifierArray[key] === true) {
				newFlavorArray.push({ modifierName: key });
			}
		}

		let allModifiers = [ ...newFlavorArray, liquid, size ];
		console.log(allModifiers);
		let cartObject = {
			userId: user,
			userName: username,
			products: [
				{
					productName: product,
					modifiers: allModifiers.map(e => {
						return e
					}),
					notes: comment,
					price: () => {
						if (size.modifierName === "Small") {
							return 4.75
						} else {
							return 5.25
						}
					}
				}
			]
		}
		let updateCartObject = {
			products: [
				{
					productName: product,
					modifiers: allModifiers.map(e => {
						return e
					}),
					notes: comment,
					price: () => {
						if (size.modifierName === "Small") {
							return 4.75
						} else {
							return 5.25
						}
					}
				}
			]
		}

		API.getCart(user)
		.then(res => {
			console.log(res);
			if (res.data == null) {
				API.createCart(cartObject);
				console.log("posted")
			} else {
				API.updateCart(user,  {$push: updateCartObject});
				console.log("updated")
			}
		});

	}

	return (
		<div className="background">
			<Nav />
			<div className="container product-card">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="heading">Teas</h1>
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
									src="https://i.imgur.com/qCSYl75.jpg"
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
									<select class="form-control" id="exampleFormControlSelect1" onChange={sizeChange}>
										<option id="3.00">Small ($3.00)</option>
										<option id="3.50">Large ($3.50)</option>
									</select>
								</div>
								<br />
								<div class="form-group">
									<br />
									<label for="exampleFormControlSelect1">Tea Base</label>
									<select
										class="form-control"
										id="exampleFormControlSelect1"
										onChange={liquidOnCLick}
									>
										<option>Black Tea</option>
										<option>Green Tea</option>
										<option>Thai Tea</option>
									</select>
								</div>
								<br />
								<div>Flavors</div>
								<div className="flavors">
									{flavors.map((flavor) => (
										<div className="indivflavor">
											<Flavor {...flavor} onChange={flavorOnClick} />
										</div>
									))}
								</div>
								<br />
								<br />
								Toppings
								<div className="toppings">
									{toppings.map((topping) => (
										<div className="indivflavor">
											<Flavor name={topping.name} onChange={flavorOnClick} />
										</div>
									))}
								</div>
								<br />
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
								<button type="submit" class="btn btn-primary" onClick={handleFormSubmit}>
									Add to Cart
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tea;
