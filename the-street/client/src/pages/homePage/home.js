import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
// import { useState,useEffect } from 'react';

function Home() {
	return (
		<div className="slider">
			<div className="load" />
			<div className="content">
				<div className="principal">
					<h1>
						THE STREET
						{/* <p className='nameBoba'>boba cafe</p> */}
					</h1>

					<p>
						“People say graffiti is ugly, irresponsible and childish... but that's only if it's done
						properly.” ― Banksy, Wall and Piece
					</p>
					<div id="navigation" className="navigation">
						<h2>
							<ul className="nav-list">
								<li className="home-link">
									<a>
										<Link to="/about">
											<div>ABOUT</div>
										</Link>
									</a>
								</li>
								<li className="home-link">
									<a>
										<Link to="/order">
											<div>ORDER</div>
										</Link>
									</a>
								</li>
								<li className="home-link">
									<a>
										<Link to="/menu">
											<div>MENU</div>
										</Link>
									</a>
								</li>

								<li className="home-link">
									<a id="button">
										<Link to="/login">
											<div>LOGIN</div>
										</Link>
									</a>
								</li>
							</ul>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
