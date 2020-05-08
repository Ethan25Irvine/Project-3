import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';

function MenuItem(props) {
	return (
		<div className="card cardmargin">
			<img src={props.image} className="card-img-top productimage" alt={props.name} />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.description}</p>
				<Link to={props.url}>
					<button className="btn btn-primary">
						<div className="optionsbtn">See options</div>
					</button>
				</Link>
			</div>
		</div>
	);
}

export default MenuItem;
