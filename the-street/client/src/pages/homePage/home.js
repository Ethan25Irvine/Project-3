import React from 'react';
import './style.css'
// import { useState,useEffect } from 'react';

function Home(){

    return(    
    <div className="slider">
    <div className="load">
    </div>
    <div className="content">
        <div className="principal">
            <h1>THE STREET 
                {/* <p className='nameBoba'>boba cafe</p> */}
            </h1>
            

            <p>
                “People say graffiti is ugly, irresponsible and childish... but that's only if it's done properly.”
                ― Banksy, Wall and Piece
            </p>
            <div id="navigation" className="navigation">
                <h2>
                    <ul id="nav-list">
                        <li> <a href="">ORDER</a></li>
                        <li> <a href="menu.html">MENU</a></li>
                        <li> <a href="/about">ABOUT US</a></li>
                        <li> <a href="/login" id="button">LOGIN</a></li>
                    </ul>
                </h2>
            </div>
        </div>
    </div>
</div>
)
};

export default Home;