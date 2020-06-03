import React, { useEffect, useState } from 'react';
import API from "../../utils/API/cart";

import Product from '../../components/Product';
import '../Smoothie/smoothie.css';
import { useHistory } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../teas.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';

function Tea() {
	const [ modifierArray, setModifierArray ] = useState([]);
	const [ product ] = useState('Tea');
	const [ size, setSize ] = useState({ modifierName: 'Small' });
	const [newPrice, setNewPrice] = useState(3);
	const [totalPrice, setTotalPrice] = useState(newPrice);
	const [milkPrice, setMilkPrice] = useState(0);
	const [ comment, setComment ] = useState('');
	const [ flavors, setFlavors ] = useState(flavorList);
	const [ toppings, setToppings ] = useState(Toppings);
	const [ liquid, setLiquid ] = useState({ modifierName: 'Apple Juice' });
	const [user, setUser] = useState();
	const [username, setUserName] = useState();
	const history = useHistory();
	function scrollup() {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		setTotalPrice(newPrice);
	}, [newPrice]);

	useEffect(() => {
		scrollup();
		setUser(localStorage.getItem("userId"));
		setUserName(localStorage.getItem("userName"));
	}, []);

	function sizeChange(event) {
		const { value } = event.target;

		if (value === "Large") {
			setNewPrice(3.5 + totalPrice - 3);
		} else {
			setNewPrice(3 + totalPrice - 3.5);
		}
		setSize({ modifierName: value });
	}

	function commentChange(event) {
		const { value } = event.target;
		setComment(value);
	}

	function liquidOnCLick(event) {
		const { value } = event.target;
		if (value === "Milk") {
			setMilkPrice(.5);
		} else {
			setMilkPrice(0);
		}
		setLiquid({ modifierName: value });
	}

	function flavorOnClick(event) {
		const { name, checked } = event.target;
		// console.log(checked);

		setModifierArray(function(previousFlavors) {
			return { ...previousFlavors, [name]: checked };
		});
	}
	function toppingOnClick(event) {
		const { name, checked } = event.target;
		if (checked === true){
			setTotalPrice(totalPrice + .5)
		} else {
			setTotalPrice(totalPrice - .5)
		}
		
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
					price: totalPrice
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
					price: totalPrice
					
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
		}).then(()=>{
			history.push("/cart");
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
										<option id="3.00" value="Small">Small ($3.00)</option>
										<option id="3.50" value="Large">Large ($3.50)</option>
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
								Toppings (+ $0.50)
								<div className="toppings">
									{toppings.map((topping) => (
										<div className="indivflavor">
											<Flavor name={topping.name} onChange={toppingOnClick} />
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
										onChange={commentChange}
									/>
								</div>
								<h3>Total: ${totalPrice.toFixed(2)}</h3>
								<button type="submit" class="btn btn-dark" onClick={handleFormSubmit}>
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
