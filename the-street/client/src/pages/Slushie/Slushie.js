import React, { useEffect, useState } from 'react';
import API from "../../utils/API/cart";

import Product from '../../components/Product';
import '../Smoothie/smoothie.css';
import { useHistory} from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../slushieFlavors.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';

function Slushie() {
	const history = useHistory();
	const [ modifierArray, setModifierArray ] = useState([]);
	const [ product ] = useState('Slushie');
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
		}).then(()=>{
			history.push("/order")
		});
	}
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
									<select class="form-control" id="exampleFormControlSelect1" onChange={sizeChange}>
										<option id="3.50">Small ($3.50)</option>
										<option id="4.00">Large ($4.00)</option>
									</select>
								</div>
								<br />
								<div>Flavors</div>
								<div className="flavors">
									{flavors.map((flavor) => (
										<div className="indivflavor">
											<Flavor name={flavor} onChange={flavorOnClick} />
										</div>
									))}
								</div>
								<div class="form-group">
									<br />
									<label for="exampleFormControlSelect1">Milk or Juice</label>
									<select
										class="form-control"
										id="exampleFormControlSelect1"
										onChange={liquidOnCLick}
									>
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
											<Flavor name={topping.name} onChange={flavorOnClick} />
										</div>
									))}
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

export default Slushie;
