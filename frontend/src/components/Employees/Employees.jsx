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
            <div><h1>REGISTER EMPLOYEES</h1></div>
            <div className={`${styles.form}`}>
                
                <div>
                    <form className={`${styles.form_div}`}>
                        <input className={`${styles.form_inp}`} type="text" name="employeeno" placeholder="Employee Number" ></input>
                        <input className={`${styles.form_inp}`} type="email" name="email" placeholder="Email id" ></input>
                        <input className={`${styles.form_inp}`} type="text" name="designation" placeholder="Designation" ></input>
                        <input className={`${styles.form_inp}`} type="text" name="department" placeholder="Department" ></input>
                        <input className={`${styles.form_inp}`} type="date" name="doj" placeholder="Date of Joining" ></input>
                        <input className={`${styles.form_inp}`} type="password" name="password" placeholder="Password" ></input>
                        <input className={`${styles.form_inp}`} type="password" name="confirm password" placeholder="Confirm Password" ></input>
                        <div className={`${styles.form_but}`}><button type="submit">SIGN UP</button></div>
                        
                    </form>
                </div>
            </div>
        </div>
    );}
};

export default Register;