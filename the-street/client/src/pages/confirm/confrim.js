import React from "react";
import "./style.css";

function Confirm (){

    return(
        <div>
            <h5>You have been successfully registered to order from The Street Boba Café</h5>
            <div className="form-group">
                    <a href="/login" className="ForgetPwd">Login Here?</a>
            </div>
        </div>
    )
}
export default Confirm;