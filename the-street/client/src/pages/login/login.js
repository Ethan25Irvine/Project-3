import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

import API from "../../utils/API/user"




function Login() {
    const history = useHistory();
    const [loginObject, setLoginObject] = useState({
        email: ''
    });
    const [isAdmin, setIsAdmin] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState();


    function userPage() {
        history.push('/user');
    }

    function adminPage() {
        history.push('/admin');
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLoginObject({ ...loginObject, [name]: value })
    };
 
    
    // useEffect(() => {   
    // const email = loginObject.email
    // API.getUser(email)
    //         .then(res => {
    //                 setIsAdmin({ admin: res.data.isAdmin })
    //             }
    //         )
    // }, [isLoggedIn]);


    function handleFormSubmit(event) {
        event.preventDefault();
         
            
           API.login(loginObject)
                .then(res => {
                    console.log(res);
            
                    if (res.status === 200 && document.cookie.split(';').some((item) => item.trim().startsWith('admin='))) {
                        adminPage();
                    } else if (res.status === 200 && document.cookie.split(';').some((item) => item.trim().startsWith('user='))){
                        userPage();
                    }
                    else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert('incorrect password or email');
                }) 
    };

    return (
        <div className="col-md-6 login-form-1">
            <h3>Login for Form 1</h3>
            <form>
                <div className="form-group">
                    <input type="text" name="email" onChange={handleInputChange} autoComplete="username" className="form-control" placeholder="Your Email *" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" onChange={handleInputChange} autoComplete="current-password" className="form-control" placeholder="Your Password *" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btnSubmit" disabled={!(loginObject.email && loginObject.password)}
                        onClick={handleFormSubmit} value="Login" />
                </div>
                {/* <div className="form-group">
                    <a href="#" className="ForgetPwd">Forget Password?</a>
                </div> */}
            </form>
        </div>
    )
};

export default Login;