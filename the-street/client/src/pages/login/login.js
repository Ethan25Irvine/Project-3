import React, { useState} from "react";
import {useHistory} from "react-router-dom";

import API from "../../utils/API/user"




function Login() {
    const history = useHistory();
    const [loginObject, setLoginObject] = useState({
        email: ''
    });

    function userPage() {
        history.push('/order');
    }

    function adminPage() {
        history.push('/admin');
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLoginObject({ ...loginObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
         
            
           API.login(loginObject)
                .then(res => {
                    console.log(res);
                    if (res.status === 200 && document.cookie.split(';').some((item) => item.trim().startsWith('admin='))) {
                        adminPage();
                    } else if (res.status === 200 && document.cookie.split(';').some((item) => item.trim().startsWith('user='))){
                        localStorage.setItem("userId", res.data.userId);
                        localStorage.setItem("userName", res.data.userName);
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
                <div className="form-group">
                    <a href="/register" className="ForgetPwd">Need to Register?</a>
                </div>
            </form>
        </div>
    )
};

export default Login;