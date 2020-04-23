import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {logout} from "../../utils/login/login";


const Dashboard = () => {

    function loginPage(){
        window.location.href='/login'
    }

    function handleLogout () {
        logout();
        loginPage();
    }
    
    return (
        <div>
            <h1>This is private</h1>
            <button onClick={() =>handleLogout()}>Click here to log out</button>
        </div>
    );
};

export default Dashboard;