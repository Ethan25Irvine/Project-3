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
							<h1>{props.name}</h1>
							<p class="m-0">
								<i class="fas fa-star fa-sm" />
								<i class="fas fa-star fa-sm" />
								<i class="fas fa-star fa-sm" />
								<i class="far fa-star fa-sm" />
								<i class="far fa-star fa-sm" />
							</p>
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
