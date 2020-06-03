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
	const [newPrice, setNewPrice] = useState(3.5);
	const [totalPrice, setTotalPrice]= useState(newPrice);
	const [milkPrice, setMilkPrice] = useState(0);
	const [ comment, setComment ] = useState('');
	const [ flavors, setFlavors ] = useState(flavorList);
	const [ toppings, setToppings ] = useState(Toppings);
	const [ liquid, setLiquid ] = useState({ modifierName: 'Apple Juice' });
	const [user, setUser] = useState();
	const [username, setUserName] = useState();

	function scrollup() {
		window.scrollTo(0, 0);
	}
	useEffect(()=>{
		setTotalPrice(newPrice);
	}, [newPrice]);

	useEffect(() => {
		scrollup();
		setUser(localStorage.getItem("userId"));
		setUserName(localStorage.getItem("userName"));
	}, []);

	function sizeChange(event) {
		const { value } = event.target;
		
		if (value === "Large"){
			setNewPrice(4 + totalPrice - 3.5);
		} else {
			setNewPrice(3.5 + totalPrice - 4);
		}
		setSize({ modifierName: value });
	}

	function commentChange(event) {
		const { value } = event.target;
		setComment(value);
	}

	function liquidOnCLick(event) {
		const { value } = event.target;
		if (value === "Milk"){
			setMilkPrice(.5);
		} else {
			setMilkPrice(0);
		}
		setLiquid({ modifierName: value });
	}
	function flavorOnClick(event){
		const { name, checked } = event.target;
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
		// console.log(allModifiers);

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
					price: totalPrice + milkPrice
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
					price: totalPrice + milkPrice
				}
			]
		}

		API.getCart(user)
			.then(res => {
				console.log(res);
				if (res.data == null) {
					API.createCart(cartObject);
					// console.log("posted")
				} else {
					API.updateCart(user,  {$push: updateCartObject});
					// console.log("updated")
				}
			})
			.then(()=>{
				history.push("/cart")
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
				<br/>
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
									<label for="exampleFormControlSelect1"><strong>Size</strong></label>
									<select class="form-control" id="exampleFormControlSelect1" onChange={sizeChange}>
										<option id="3.50" value="Small">Small ($3.50)</option>
										<option id="4.00" value="Large">Large ($4.00)</option>
									</select>
								</div>
								<br />
								<div><strong>Flavors</strong></div>
								<div className="flavors">
									{flavors.map((flavor) => (
										<div className="indivflavor">
											<Flavor name={flavor} onChange={flavorOnClick} />
										</div>
									))}
								</div>
								<div class="form-group">
									<br />
									<label for="exampleFormControlSelect1"><strong>Milk or Juice</strong></label>
									<select
										class="form-control"
										id="exampleFormControlSelect1"
										onChange={liquidOnCLick}
									>
										<option>Apple Juice (most common)</option>
										<option>Whole Milk</option>
										<option value="Milk">Soy Milk ($0.50)</option>
										<option value="Milk">Almond Milk ($0.50)</option>
										<option value= "Milk">Coconut Milk ($0.50)</option>
										<option value= "Milk">Rice Milk ($0.50)</option>
										<option>Green Tea</option>
										<option>Black Tea</option>
									</select>


								</div>
								<strong>Toppings</strong> (+ $0.50)
								
								<div className="toppings">
									{toppings.map((topping) => (
										<div className="indivflavor">
											<Flavor name={topping.name} onChange={toppingOnClick} />
										</div>
									))}
								</div>
								<br />
								<div class="form-group">
									<label for="comments"><strong>Comments</strong></label>
									<input
										class="form-control"
										id="comments"
										aria-describedby="comments"
										placeholder=""
										onChange={commentChange}
									/>
								</div>
								<h3>Total: ${(totalPrice + milkPrice).toFixed(2)}</h3>
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

export default Slushie;
