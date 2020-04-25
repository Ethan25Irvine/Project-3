import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';


const Dashboard = () => {

   function delete_cookie(name) { document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; }; 

    function handleLogout () {
        delete_cookie('token')
            .then(
                <Redirect to='/login'></Redirect>
            );
    };
    
    return (
        <div>
            <h1>This is private</h1>
            <button onClick={() =>handleLogout()}>log out</button>
        </div>
    );
};

export default Dashboard;