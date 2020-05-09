import React, { useEffect, useState } from 'react';

// import Product from '../../components/Product';
import './smoothie.css';
// import { Link, useLocation } from 'react-router-dom';
import Flavor from '../../components/Flavor/flavor';
import flavorList from '../../flavorList.json';
import Toppings from '../../toppings.json';
import Nav from '../../components/Navbar/nav';
import { checkPropTypes } from 'prop-types';



function Smoothie() {
	const [modifierArray, setModifierArray] = useState([]);
	const [product] = useState( "Smothie");
	const [size, setSize] = useState({modifierName: "Small"});
	const [comment, setComment] = useState("");
	const [flavors, setFlavors] = useState(flavorList);
	const [toppings, setToppings] = useState(Toppings); 
	const [liquid, setLiquid] = useState({modifierName: "Apple Juice"});
	const [newFlavor, setNewFLavor] = useState();


	function scrollup() {
		window.scrollTo(0, 0);
	}

	useEffect(() => {
		scrollup();
	}, []);

	function sizeChange(event){
		const {value} = event.target
		setSize({modifierName: value});
	};

	function commentChange (event){
		const {value} = event.target
		setComment(value)
	};

	function liquidOnCLick(event){
		const {value} = event.target
		setLiquid({modifierName: value});
	}

	function flavorOnClick(event){
		const {name, checked} = event.target
		console.log(checked)
		
			
			setModifierArray(function (previousFlavors){
				return {...previousFlavors, [name] : checked}
			});
	};

	// function toppingOnClick(event){
	// 	const {name, checked} = event.target
	// 	console.log(checked)
		
			
	// 		setModifierArray(function (previousFlavors){
	// 			return {...previousFlavors, [name] : checked}
	// 		});
	// };
	let flavArray = [];
	function FlavLoop(){
		// flavors.map(e =>{
		// 		if (e.isChecked === true){
		// 			// console.log(e.name)
		// 			flavArray.push(e.name); 
					
				
		// 		}
		// 		// setNewFLavor(flavArray)
				
		// 	})
		// 	console.log(flavArray);

		// 	// flavArray.map(e => {
					
		// 	// 	})
	}

	
	let toppArray = [];
	let testArray = [];
	function handleFormSubmit(event){
		event.preventDefault();
		
		let newFlavorArray = []
		for (let key in modifierArray) {
			if(modifierArray[key] === true) {
			 newFlavorArray.push({modifierName : key})
			}
		}
		
		let allModifiers = [...newFlavorArray, liquid, size]
		console.log(allModifiers)
	}

	return (
		<div>
			<div>
				<Nav />
				<div className="container product-card">
					<div className="row">
						<div className="col-lg-12 text-center">
							<h1 className="heading">Smoothies</h1>
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
										src="https://i.imgur.com/Oqvf7xS.jpg"
									/>
								</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class=" options newborder">
								<form>
									<div class="form-group">
										<label for="exampleFormControlSelect1">Size</label>
										<select class="form-control" id="exampleFormControlSelect1" onChange= {sizeChange}>
											<option key="Small" id="Small" value="Small">Small ($4.75)</option>
											<option key="Large" id="Large" value="Large" >Large ($5.25) </option>
										</select>
									</div>
									<br />
									<div>Flavors</div>
									<div className="flavors" >
										{flavors.map((flavor) => (
											<div className="indivflavor">
												<Flavor {...flavor} onChange={flavorOnClick}/>
											</div>
										))}
									</div>
									<br />
									<div class="form-group">
										<label for="exampleFormControlSelect1">Milk or Juice</label>
										<select class="form-control" id="exampleFormControlSelect1" onChange={liquidOnCLick}>
											<option value="Apple Juice">Apple Juice ( fruit smoothies)</option>
											<option>Whole Milk</option>
											<option>Soy Milk</option>
											<option>Almond Milk</option>
											<option>Coconut Milk</option>
											<option>Rice Milk</option>
											<option value="Green Tea">Green Tea (fruit smoothies)</option>
											<option value="Black Tea">Black Tea (fruit smoothies)</option>
										</select>
									</div>
									<br />
									Toppings
									<div className="toppings">
										{toppings.map((topping) => (
											<div className="indivflavor">
												<Flavor name={topping.name} onChange={flavorOnClick}/>
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
											onChange = {commentChange}
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
		</div>
	);
}

export default Smoothie;