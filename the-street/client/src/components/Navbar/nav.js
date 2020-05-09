import React from 'react';
import { Link, useLocation } from 'react-router-dom';
function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark">
				<a className="navbar-brand">
					<Link to="/home" className="link">
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
										<Link to="/" className="link">
											<div>HOME</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/menu" className="link">
											<div>MENU</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/about" className="link">
											<div>ABOUT</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/order" className="link">
											<div>ORDER</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/login" className="link">
											<div>LOGIN</div>
										</Link>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link">
										<Link to="/cart" className="link">
											<div>
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
