import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';

function MenuItem(props) {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img src={props.image} className="card-img-top" alt={props.name} />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.description}</p>
				<button className="btn btn-primary">
					<Link to={props.url}>
						<div className="optionsbtn">See options</div>
					</Link>
				</button>
			</div>
		</div>
	);
}

export default MenuItem;
