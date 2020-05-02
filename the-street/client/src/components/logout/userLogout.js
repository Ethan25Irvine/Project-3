import React from 'react';



const Logout = () => {

    function delete_cookie(name) { document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; };
    function redirect() {
        window.location.href = '/login';
    }

    function handleLogout() {
        delete_cookie('user');
        redirect();
    };

    return (
        <div>
            <button onClick={() => handleLogout()}>log out</button>
        </div>
    );
}

export default Logout;