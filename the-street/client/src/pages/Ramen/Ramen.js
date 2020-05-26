import React, { useState, useEffect } from 'react';
import API from "../../utils/API/cart";

import items from '../../foods.json';
import Product from '../../components/Product';
import { useHistory} from 'react-router-dom';
import './ramen.css';
import Nav from '../../components/Navbar/nav';

function Ramen() {
	const history = useHistory();
	const [ modifierArray, setModifierArray ] = useState([]);
	const [ product ] = useState('Ramen');
	const [ comment, setComment ] = useState('');
	const [ toppings, setToppings ] = useState({ modifierName: 'Dumplings' });
	const [ spice, setSpice ] = useState({ modifierName: 'Spicy' });
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

	function commentChange(event) {
		const { value } = event.target;
		setComment(value);
	}
	function spiceOnCLick(event) {
		const { value } = event.target;
		setSpice({ modifierName: value });
	}
	function toppingsOnCLick(event) {
		const { value } = event.target;
		setToppings({ modifierName: value });
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		let allModifiers = [ spice, toppings ];
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
									<select class="form-control" id="exampleFormControlSelect1" onChange={spiceOnCLick}>
										<option value="Spicy">Spicy</option>
										<option value="Mild">Mild</option>
										<option value="Not Spicy">Not Spicy</option>
										<option value="Veggie">Veggie</option>
									</select>
								</div>

								<div class="form-group">
									<br />
									<label for="FormControlSelect">Toppings</label>
									<select class="form-control" id="FormControlSelect" onChange={toppingsOnCLick}>
										<option value="Dumplings">Dumplings</option>
										<option value="Rice Cakes">Rice Cakes</option>
										<option value="Dumplings + Rice Cakes">Dumplings + Rice Cakes</option>
										<option>None</option>
									</select>
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

export default Ramen;
