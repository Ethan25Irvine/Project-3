import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import API from "../../utils/API/user"




function Register() {
    const [registerObject, setRegisterObject] = useState({});
    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;
        setRegisterObject({ ...registerObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (registerObject.password !== registerObject.confirmPassword){
            alert("passwords do not match!");
        } else if (registerObject.email === API.getUser(registerObject.email)){
            alert("email is already in use");
        } else {
            API.register(
                {
                    name: registerObject.name,
                    email: registerObject.email,
                    password: registerObject.password
                }
            ).catch(err => {
                console.error(err);
                console.log(err);
            }).then (()=>{
                history.push('/confirm')
            }) 
        }
         
    };

    return (
        <div className = "register-form-1 container col-md-4">
        <div className="">
            <h3>Register Here</h3>
            <form>
                <div className="form-group">
                    <input type="text" name="name" onChange={handleInputChange} autoComplete="username" className="form-control" placeholder="First and Last Name *" />
                </div>
                <div className="form-group">
                    <input type="text" name="email" onChange={handleInputChange} autoComplete="username" className="form-control" placeholder="Your Email *" />
                </div>
                <div className="form-group">
                    <input type="password" name="password" onChange={handleInputChange} autoComplete="current-password" className="form-control" placeholder="Your Password *" />
                </div>
                <div className="form-group">
                    <input type="password" name="confirmPassword" onChange={handleInputChange} autoComplete="current-password" className="form-control" placeholder="Confirm Password *" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btnSubmit" disabled={!(registerObject.email && registerObject.password && registerObject.name && registerObject.confirmPassword)}
                        onClick={handleFormSubmit} value="Register" />
                </div>     
            </form>
        </div>
        </div>
    )
};

export default Register;