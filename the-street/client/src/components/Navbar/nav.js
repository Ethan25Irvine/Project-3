import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from "../../components/logout/userLogout";
function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<a className="navbar-brand">
					<Link to="/home">
						<div className="thestreet link">THE STREET</div>
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
											<div className="link">HOME</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/menu" >
											<div className="link">MENU</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/about" >
											<div className="link">ABOUT</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/order" >
											<div className="link">ORDER</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/">
											<Logout className="link"/>
										</Link>
										
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/cart" >
											<div className="link">
												<i class="fas fa-shopping-cart" />
											</div>
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
