import React, { useState, useEffect } from 'react';
import Nav from '../../components/Navbar/nav';


import orderAPI from '../../utils/API/order';
import cart from '../../utils/API/cart';


const Dashboard = () => {
	const [data, setData] = useState();

	useEffect(() => {
		orderAPI.getOrders().then(res => {
			console.log(res.data)
			setData(res.data);
			
	});
}, 60000)




	return (
		<div>
			<Nav />
			<div className="text-center cart-header">
				<h1 className="cart-h1">ORDERS</h1>
			</div>
			<div className="container">
				<ul class="list-group">
					{data ? (
						
						data.map(res => {
							console.log(res)
							return (
							 <li class="list-group-item">
						<div className="row">
							<div className="col-lg-3">
								<div className="customer-name">
									<h2>{res.userName}</h2>
								</div>
							</div>
							{res.products.map(res=>{
								return(
								<div>
									<div className="col-lg-3">
										<div className="product-name">
											<h1>{res.productName}</h1>
										</div>
									</div>
									{res.modifiers.map(res=>{
										return (
											<div className="col-lg-6">
												<div className="product-modifiers">
													<h5>{res.modifierName}</h5>
												</div>
											</div>
										)
									})}

									<div className="row">
										<div className="col-lg-3" />
										<div className="col-lg-9">{res.notes}</div>
									</div>
								</div>
						); 
							})}
						</div>	
							</li>) 
						})
					): (
						<h3>Yes</h3>
					)}
					
				</ul>
			</div>
		</div>

	);

}
export default Dashboard;
