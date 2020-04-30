import React from 'react';

function Product(props) {
	return (
		<div className="container product-card">
			<div class="row mb-5">
				<div class="col-md-8">
					<div class="row">
						<div class="col-md-12 mb-4">
							<img alt="" class="img-thumbnail p-0 border-0 image-main" src={props.image} />
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<div class="card options">
						<div class="card-body">
							<h1>Apple iPhone 10 Pro Max</h1>
							<p class="m-0">
								<i class="fas fa-star fa-sm" />
								<i class="fas fa-star fa-sm" />
								<i class="fas fa-star fa-sm" />
								<i class="far fa-star fa-sm" />
								<i class="far fa-star fa-sm" />
							</p>

							<fieldset>
								<legend>Available Options</legend>
								<div class="form-group row">
									<label for="" class="col-sm-12 col-form-label">
										Size
									</label>
									<div class="col-sm-12">
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize1"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize1">
												34
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize2"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize2">
												36
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize3"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize3">
												38
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize4"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize4">
												40
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize5"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize5">
												42
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize6"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize6">
												44
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize7"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize7">
												46
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize8"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize8">
												48
											</label>
										</div>
										<div class="custom-control custom-radio custom-control-inline">
											<input
												type="radio"
												id="radioSize9"
												name="radio_size"
												class="custom-control-input"
											/>
											<label class="custom-control-label" for="radioSize9">
												50
											</label>
										</div>
									</div>
								</div>
							</fieldset>
							<div class="input-group input-group-lg mb-4" />
							<div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
								<button type="button" class="btn btn-secondary">
									<i class="fas fa-cart-plus" />
									<span>Add Cart</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
