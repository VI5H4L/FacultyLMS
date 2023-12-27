import React from "react";
import styles from './ChangePassword.module.css'

function ChangePassword() {
    return (
        <div className={`${styles.mainDash}`}>
            <form className={`${styles.input_fields}`}>
                <div>
                    <label>Enter Old Password:</label>
                    <input type="password"></input>
                </div>
                <div>
                    <label style={{marginLeft:"-2.9%"}}>Enter New Password:</label>
                    <input type="password"></input>
                </div>
                <div>
                    <label style={{marginLeft:"1%"}}>Confirm Password:</label>
                    <input type="password"></input>
                </div>
                <button type="submit" className={`${styles.bn}`}>Submit</button>
            </form>
        </div>
    );
};

export default ChangePassword;