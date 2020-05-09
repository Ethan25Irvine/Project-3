import React from "react";
import "./style.css";

function Confirm (){

    return(
        <div className ="successfulRegistration">
            <h5>You have been successfully registered to order from The Street Boba Café</h5>
            <div className="form-group">
                <br/>
                <br/>
                    <a href="/login" className="ForgetPwd btn btn-dark">Login Here</a>
                    <a href="/" className="goHomeFromReg btn btn-dark">Home Page</a>
            </div>
        </div>
    )
}
export default Confirm;