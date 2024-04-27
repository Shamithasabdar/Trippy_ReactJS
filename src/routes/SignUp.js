import React from "react";
import './SignUpStyles.css';

const SignUp =() => {
    return(
        <div className='Container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input">
                    <input type="password" placeholder="Password"/>
                </div>

            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>

        </div>
    )
}
export default SignUp;