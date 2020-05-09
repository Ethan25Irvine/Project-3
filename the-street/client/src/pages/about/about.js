import React from 'react';
import './style.css'
import "../homePage/style.css"


// import HomePage from "../homePage/home"

function about() {
    return (
        <div>
            <div className="slider">
                <div className="load">
                </div>
                <div className="content">
                    <div className="principal">
                        <h2 id="aboutUs"> About Us</h2>
                        <p id="aboutParagraph" className="aboutParagraph">
                            The Street Boba Cafe is not only a cafe, but a place of creativity. A place where patrons can not only eat
                            delicious food but also project their creative side. Our walls are primed and tagged by not only famous
                            local artists, but also the common person. Although we provide some materials, we encourage our patrons to bring their
                            own art supplies and decorate our walls. So if you're looking for world-class bubble tea as well as a fun and creative outlet, then
                            head down to The Street Boba Cafe!                
                        </p>
                        <div id="navigation" className="navigation">
                            <h2>
                                <ul id="nav-list">
                                    <li> <a href="">ORDER</a></li>
                                    <li> <a href="menu.html">MENU</a></li>
                                    <li> <a href="/">HOME</a></li>
                                    <li> <a href="/login" id="button">LOGIN</a></li>
                                </ul>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default about;