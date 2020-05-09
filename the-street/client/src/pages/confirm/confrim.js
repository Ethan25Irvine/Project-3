import React from "react";
import "./style.css";

function Confirm() {

    return (
        <div className="slider">
            <div className="load" />
            <div className="content">
                <div className="principal">

                    <div className="successfulRegistration">
                        <h5>You have been successfully registered to order from The Street Boba Café</h5>
                        <div className="form-group">
                            <br />
                            <br />
                            <a href="/login" className="forgetPwd btn btn-dark">Login Here</a>
                            <a href="/" className="goHomeFromReg btn btn-dark">Home Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Confirm;