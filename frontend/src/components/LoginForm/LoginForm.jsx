import React, { useRef, useState, useEffect, useContext  } from "react";
import styles from './LoginForm.module.css';

import {useNavigate} from "react-router-dom";
import Cookies from 'js-cookie';
import axios from '../../api/axios';
const LOGIN_URL = '/login';



const Login = () => {
    const nav = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data));

            const accessToken = response.data.accessToken;
            const designation = response.data.designation;
            
            Cookies.set('jwt',accessToken);
            
            setEmail('');
            setPassword('');

            if(designation=='admin'){
                nav('/admin');
            }
            else if(designation=='faculty'){
                nav('/leaverequest');
            }
            else if(designation=='director'){
                nav('/leaverequest');
            }
            else if(designation=='dofa'){
                nav('/leaverequest');
            }

        } catch(err) {
            console.log(err.response);
            if (!err?.response) {
                alert('No Server Response');
            } else if (err.response?.status === 400) {
                alert('Missing Username or Password');
            } else if (err.response?.status === 401) {
                alert('Unauthorized');
            } else {
                alert('Login Failed');
            }
        }

    };

    return (
        <div className={`${styles.Login}`} >
            <div><h1>WELCOME TO LNMIIT | LEAVE MANAGEMENT SYSTEM</h1></div>
            <div className={`${styles.form}`}>
                <div><h2>Login</h2></div>
                <div>
                    <form className={`${styles.form_div}`} onSubmit={handleSubmit}>
                        <input
                            className={`${styles.form_inp}`}
                            type="email"
                            name="name"
                            placeholder="Email id"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            className={`${styles.form_inp}`}
                            type="password"
                            name="name"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
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
