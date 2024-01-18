import React from "react";
import styles from './LoginForm.module.css';
import MyContext from "../../Context/createContext";

class Login extends React.Component {
    static contextType = MyContext;

    state = {
        email: "",
        password: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.email === "" || this.state.password === "") {
            alert("All fields are mandatory!!");

        }

        this.props.addHandler(this.state);
        this.setState({ email: "", password: "" });

        const { dataSend } = this.context;
        console.log("called")
        dataSend("",this.state);
    };

    render() {
        return (
            <div className={`${styles.Login}`} >
                <div><h1>WELCOME TO LNMIIT | LEAVE MANAGEMENT SYSTEM</h1></div>
                <div className={`${styles.form}`}>
                    <div><h2>Login</h2></div>
                    <div>
                        <form className={`${styles.form_div}`} onSubmit={this.add}>
                            <input
                                className={`${styles.form_inp}`}
                                type="email"
                                name="name"
                                placeholder="Email id"
                                onChange={(e) => this.setState({ email: e.target.value })}
                                value={this.state.email}
                            />
                            <input
                                className={`${styles.form_inp}`}
                                type="password"
                                name="name"
                                placeholder="Password"
                                onChange={(e) => this.setState({ password: e.target.value })}
                                value={this.state.password}
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
}

export default Login;
