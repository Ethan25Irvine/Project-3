import React from "react";


const Dashboard = () => {

   function delete_cookie(name) { document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; }; 
   function redirect(){
       window.location.href='/login';
   }

    function handleLogout () {
        delete_cookie('admin');
        
        redirect();
                
           
    };
    
    return (
        <div>
            <h1>This is for admins</h1>
            <button onClick={() =>handleLogout()}>log out</button>
        </div>
    );
};

export default Dashboard;