import React from 'react';
import 'style.css'

function Home(){
    return(    
    <div className="slider">
    <div className="load">
    </div>
    <div className="content">
        <div className="principal">
            <h1>THE STREET</h1>

            <p>
                “People say graffiti is ugly, irresponsible and childish... but that's only if it's done properly.”
                ― Banksy, Wall and Piece
            </p>
            <div id="navigation">
                <h2>
                    <ul id="nav-list">
                        <li> <a href="">ORDER</a></li>
                        <li> <a href="menu.html">MENU</a></li>
                        <li> <a href="about.html">ABOUT US</a></li>
                        <li> <a href="#" id="button">LOGIN</a></li>
                    </ul>
                </h2>
            </div>
        </div>
    </div>
</div>
)
};