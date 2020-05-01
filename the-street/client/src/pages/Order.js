import React, { Component } from 'react';
import MenuItem from '../components/MenuItem';
import items from '../menuitems.json';
import './order.css';
class Order extends Component {
	// Setting this.state.friends to the friends json array
	state = {
		items
	};

	// Map over this.state.items and render a FriendCard component for each friend object
	render() {
		return (
			<div>
				<div class="jumbotron jumbotron-fluid header">
					<div class="container">
						<h1 class="display-4">Place your order for pickup</h1>
					</div>
				</div>
				<div className="products row">
					{this.state.items.map((item) => (
						<div className="col-lg-3 product">
							<MenuItem
								id={item.id}
								key={item.id}
								name={item.name}
								image={item.image}
								description={item.description} url={item.url}
							/>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Order;