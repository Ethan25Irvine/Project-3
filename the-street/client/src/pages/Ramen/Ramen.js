import React, { useState, useEffect } from 'react';
import API from "../../utils/API/cart";
import { useHistory } from 'react-router-dom';
import './ramen.css';
import Nav from '../../components/Navbar/nav';

function Ramen() {
	const history = useHistory();
	const [product] = useState('Ramen');
	const [comment, setComment] = useState('');
	const [toppings, setToppings] = useState({ modifierName: 'Dumplings' });
	const [spice, setSpice] = useState({ modifierName: 'Spicy' });
	const [totalPrice, setTotalPrice] = useState(3.99);
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
		if (value === "Dumplings + Rice Cakes") {
			setTotalPrice(5.99)
		} else if (value === "Dumplings" || "Rice Cakes") {
			setTotalPrice(4.99)
		}
	}

	function handleFormSubmit(event) {
		event.preventDefault();

		let allModifiers = [spice, toppings];
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
					price: totalPrice,
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
					API.updateCart(user, { $push: updateCartObject });
					// console.log("updated")
				}
			}).then(() => {
				history.push("/cart")
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
									<label for="exampleFormControlSelect1"><strong>Spice level</strong></label>
									<select class="form-control" id="exampleFormControlSelect1" onChange={spiceOnCLick}>
										<option value="Spicy">Spicy</option>
										<option value="Mild">Mild</option>
										<option value="Not Spicy">Not Spicy</option>
										<option value="Veggie">Veggie</option>
									</select>
								</div>

								<div class="form-group">
									<br />
									<label for="FormControlSelect"><strong>Toppings</strong></label>
									<select class="form-control" id="FormControlSelect" onChange={toppingsOnCLick}>
										<option value="None">None</option>
										<option value="Dumplings">Dumplings (+ $1.00)</option>
										<option value="Rice Cakes">Rice Cakes (+ $1.00)</option>
										<option value="Dumplings + Rice Cakes">Dumplings + Rice Cakes (+ $1.00)</option>

									</select>
								</div>
								<br />
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

export default Ramen;
