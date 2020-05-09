import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';

function MenuItem(props) {
	return (
		<div className="card">
			<Link to={props.url}>
				<img src={props.image} className="card-img-top productimage" alt={props.name} />
				<div className="text-center">
					<h5 className=" centered title">{props.name}</h5>
				</div>
			</Link>
		</div>
	);
}

export default MenuItem;
