import React, { Component } from 'react';
import items from '../menuitems.json';
import Product from '../components/Product';
class Ramen extends Component {
	state = {
		items
	};
	render() {
		return (
			<div className="container product-card">
				<div class="row mb-5">
					<div class="col-md-8">
						<div class="row">
							<div class="col-md-12 mb-4">
								<img alt="" class="img-thumbnail p-0 border-0 image-main" src={items[3].image} />
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="card options">
							<form>
								<div class="form-group">
									<label for="exampleFormControlSelect1">Example select</label>
									<select class="form-control" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Ramen;
