import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Logout from "../../components/logout/userLogout";
import "./style.css"
function Nav() {

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<a className="navbar-brand nav-link">
					<Link to="/home">
						<div className="thestreet">THE STREET</div>
					</Link>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<div className="table col-lg-12">
						<div>
							<ul className="navbar-nav" id="navthings">
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/" >
											<div >HOME</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/menu" >
											<div >MENU</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/about" >
											<div>ABOUT</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/order" >
											<div>ORDER</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/">
											<Logout />
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/cart" >
											<i className="fas fa-shopping-cart" />
										</Link>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
