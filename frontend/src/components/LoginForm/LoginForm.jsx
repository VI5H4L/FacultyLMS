import React from "react";
import { useState } from "react";
import styles from './LoginForm.module.css';

class Login extends React.Component {
    state ={
        email:"",
        password:""

    };
    add=(e)=>
    {
        e.preventDefault();
        if(this.state.email==="" || this.state.password==="")
        {
            alert("All fields are mandatory!!");
            return;
        }
        this.props.addHandler(this.state);
        this.setState({email:"",password:""});
     

    };
    render(){
    return (
        <div className={`${styles.Login}`} >
            <div><h1>WELCOME TO LNMIIT | LEAVE MANAGEMENT SYSTEM</h1></div>
            <div className={`${styles.form}`}>
                <div><h2>Login</h2></div>
                <div>
                    <form className={`${styles.form_div}`} onSubmit={this.add}>
                        <input className={`${styles.form_inp}`} type="email" name="name" placeholder="Email id" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email}></input>
                        <input className={`${styles.form_inp}`} type="password" name="name" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password}></input>
                        {/*
                        <select name="Designation" className={`${styles.drop_down}`}>
                            <option value="Admin">Admin</option>
                            <option value="Faculty">Faculty</option>
                            <option value="HOD">HOD</option>
                            <option value="Director">Director</option>
                        </select>
    */}
                        <div className={`${styles.form_but}`}><button type="submit">SIGN IN</button></div>
                    </form>
                </div>
            </div>
        </div>
    );}
};

export default Login;