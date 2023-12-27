import React from "react";
import styles from './LoginForm.module.css';

const Login = () => {
    return (
        <div className={`${styles.Login}`}>
            <div><h1>WELCOME TO LNMIIT | LEAVE MANAGEMENT SYSTEM</h1></div>
            <div className={`${styles.form}`}>
                <div><h2>Login</h2></div>
                <div>
                    <form className={`${styles.form_div}`}>
                        <input className={`${styles.form_inp}`} type="email" name="name" placeholder="Email id"></input>
                        <input className={`${styles.form_inp}`} type="password" name="name" placeholder="Password"></input>
                        <select name="Designation" className={`${styles.drop_down}`}>
                            <option value="Admin">Admin</option>
                            <option value="Faculty">Faculty</option>
                            <option value="HOD">HOD</option>
                            <option value="Director">Director</option>
                        </select>
                        <div className={`${styles.form_but}`}><button type="submit">SIGN IN</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;