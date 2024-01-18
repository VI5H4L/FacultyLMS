import React from "react";
import { useState } from "react";
import styles from './Employees.module.css';

class Register extends React.Component {
    state ={
        email:"",
        password:""

    };

    render(){
    return (
        <div className={`${styles.Login}`} >
            <div><h1>SIGN UP EMPLOYEES</h1></div>
            <div className={`${styles.form}`}>
                <div><h2>Register Employees</h2></div>
                <div>
                    <form className={`${styles.form_div}`}>
                        <input className={`${styles.form_inp}`} type="email" name="name" placeholder="Email id" ></input>
                        <input className={`${styles.form_inp}`} type="password" name="name" placeholder="Password" ></input>

                        <div className={`${styles.form_but}`}><button type="submit">SIGN UP</button></div>
                    </form>
                </div>
            </div>
        </div>
    );}
};

export default Register;