import React, { useEffect, useState } from 'react';
import API from "../../utils/API/cart";


import './di.css';
import { useHistory } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import Nav from '../../components/Navbar/nav';
import Toppings from '../../ditoppings.json';


function DI() {
	const [ modifierArray, setModifierArray ] = useState([]);
	const [price, setPrice]= useState(4);
	const [ toppings, setToppings ] = useState(Toppings);
	const [ product ] = useState('Diamond Ice');
	const [ size, setSize ] = useState({ modifierName: 'tiny' });
	const [ liquid, setLiquid ] = useState({ modifierName: 'Condensed Milk' });
	const [user, setUser] = useState();
	const [username, setUserName] = useState();
	const [ comment, setComment ] = useState('');
	const history = useHistory();

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
		if (value === "Tiny"){
			setPrice(4);
		} else if (value === "Mini"){
			setPrice(5);
		} else if (value === "Small"){
			setPrice(6);
		} else if (value === "Medium"){
			setPrice(10);
		} else if (value === "Large"){
			setPrice(12);
		} else (
			setPrice(16)
		)
			
		
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

		let allModifiers = [ ...newFlavorArray, size, liquid ];
		

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
					price: price
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
					price: price
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
									<select class="form-control" id="size" onChange={sizeChange}>
										<option id="4.00" value="Tiny">
											Tiny ($4.00)
										</option>
										<option id="5.00" value="Mini">
											Mini ($5.00)
										</option>
										<option id="6.00" value="Small">
											Small ($6.00)
										</option>
										<option id="10.00" value="Medium">
											Medium ($10.00)
										</option>
										<option id="12.00" value="Large">
											Large ($12.00)
										</option>
										<option id="16.00" value="Extra Large">
											Extra Large ($16.00)
										</option>
									</select>
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
								<div class="form-group">
									<br />
									<label for="milk">Milk Options</label>
									<select class="form-control" id="milk" onChange={liquidOnCLick}>
										<option>Condensed Milk (most common)</option>
										<option>Whole Milk</option>
										<option>Soy Milk</option>
										<option>Almond Milk</option>
										<option>Coconut Milk</option>
										<option>Rice Milk</option>
									</select>
								</div>
								<div class="form-group">
									<label for="comments">Comments</label>
									<input
										onChange= {commentChange}
										class="form-control"
										id="comments"
										aria-describedby="comments"
										placeholder=""
									/>
								</div>
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

export default DI;
