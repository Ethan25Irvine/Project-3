import React from 'react';
import '../homePage/style.css';
import { Link, useLocation } from 'react-router-dom';

function Menu (){
    return(
        <div className="slider">
			<div className="load" />
			<div className="content">
				<div className="principal">
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
										<Link to="/home">
											<div>HOME</div>
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
                    
                    


		
    )
}
export default Menu;