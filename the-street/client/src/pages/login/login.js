import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {login} from "../../utils/login/login";
import API from "../../utils/API/user"
// import {Route, Redirect} from 'react-router-dom';


function Login() {
    const [loginObject, setLoginObject] = useState({});

    function adminPage (){
       window.location.href='/private'
    }
    
    
    

    function handleInputChange(event) {
        const { name, value } = event.target;
        setLoginObject({...loginObject, [name]: value})
      };

        const email = loginObject.email
      function handleFormSubmit(event) {
        event.preventDefault();
       API.getUser(email)
        .then(console.log(email))
        .catch(err => console.log(err));
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
}

export default Login;