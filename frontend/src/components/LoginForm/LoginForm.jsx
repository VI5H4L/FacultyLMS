import React, { useContext, useState } from "react";
import styles from './LoginForm.module.css';
import MyContext from "../../Context/createContext";
import {useNavigate} from "react-router-dom"
const Login = () => {
    const nav = useNavigate();
    const { dataSend } = useContext(MyContext);

    const [state, setState] = useState({
        email: "",
        password: ""
    });

    const add = async(e) => {
        e.preventDefault();
        if (state.email === "" || state.password === "") {
            alert("All fields are mandatory!!");
            return;
        }
      await  dataSend("", state);
      setState({ email: "", password: "" });
       const pos = localStorage.getItem("pos");
       console.log(pos);
       if(pos=='admin'){
            nav('/admin');
       }else if(pos=='faculty'){
            nav('/leaverequest');
       }else if(pos=='director'){
            nav('/');
       }else if(pos=='dofa'){
            nav('/');
       }
       else{
        alert("Invalid Credentials!");
       }
    };

    return (
        <div className={`${styles.Login}`} >
            <div><h1>WELCOME TO LNMIIT | LEAVE MANAGEMENT SYSTEM</h1></div>
            <div className={`${styles.form}`}>
                <div><h2>Login</h2></div>
                <div>
                    <form className={`${styles.form_div}`} onSubmit={add}>
                        <input
                            className={`${styles.form_inp}`}
                            type="email"
                            name="name"
                            placeholder="Email id"
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            value={state.email}
                        />
                        <input
                            className={`${styles.form_inp}`}
                            type="password"
                            name="name"
                            placeholder="Password"
                            onChange={(e) => setState({ ...state, password: e.target.value })}
                            value={state.password}
                        />
                        <div className={`${styles.form_but}`} >
                            <button type="submit">SIGN IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
