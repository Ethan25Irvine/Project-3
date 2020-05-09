import React, { useEffect, useState } from 'react';
import API from "../../utils/API/cart";

import Product from '../../components/Product';
import '../Smoothie/smoothie.css';
import { useHistory } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../teas.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';


function Coffee() {
	const [ modifierArray, setModifierArray ] = useState([]);
	const history = useHistory();
	const [ toppings, setToppings ] = useState(Toppings);
	const [ product ] = useState('Coffee');
	const [ size, setSize ] = useState({ modifierName: 'Small' });
	const [ type, setType ] = useState({ modifierName: 'Hot Coffee' });
	const [ comment, setComment ] = useState('');
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
	function typeChange(event) {
		const { value } = event.target;
		setType({ modifierName: value });
	}

	function commentChange(event) {
		const { value } = event.target;
		setComment(value);
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

		let allModifiers = [ ...newFlavorArray, type, size ];
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
			history.push("/order");
		});
	}
	return (
		<div className="background">
			<Nav />

			<div className="container product-card">
				<div className="row">
					<div className="col-lg-12 text-center">
						<h1 className="heading">Coffee</h1>
					</div>
				</div>
				<br />

				<div className="row mb-5">
					<div className="col-md-7">
						<div className="row">
							<div className="col-md-12 mb-4 ">
								<img
									alt=""
									className="img-thumbnail p-0 border-0 image-main smoothies"
									src="https://i.imgur.com/k5IkYI1.jpg"
								/>
							</div>
						</div>
					</div>
					<div className="col-md-5">
						<div className="card options newborder">
							<form>
								<div className="form-group">
									<label for="exampleFormControlSelect1">Size</label>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										onChange={sizeChange}
									>
										<option key="Small" id="Small" value="Small">
											Small ($3.00)
										</option>
										<option key="Large" id="Large" value="Large">
											Large ($3.50)
										</option>
									</select>
								</div>
								<br />
								<div className="form-group">
									<br />
									<label for="CoffeeChoice">Type</label>
									<select className="form-control" id="CoffeeChoice" onChange={typeChange}>
										<option>Hot Coffee</option>
										<option>Iced Coffee</option>
										<option>Lattes</option>
										<option>Coffee Smoothie</option>
										<option>Mocha Smoothie</option>
										<option>Coffee Milk Tea</option>
										<option>Vietnamese Iced Coffee</option>
									</select>
								</div>
								<br />
								Toppings
								<div className="toppings">
									{toppings.map((topping) => (
										<div className="indivflavor">
											<Flavor name={topping.name} onChange={flavorOnClick} />
										</div>
									))}
								</div>
								<div class="form-group">
									<label for="comments">Comments</label>
									<input
										class="form-control"
										id="comments"
										aria-describedby="comments"
										placeholder="add cream, half & half, etc."
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

export default Coffee;
