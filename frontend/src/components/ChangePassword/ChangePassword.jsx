import React, { useContext, useState } from "react";
import styles from './ChangePassword.module.css';
import MyContext from "../../Context/createContext";
function ChangePassword() {
    const { dataSend2 } = useContext(MyContext);
    const [form, setForm] = useState({});
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting and page reloading
        console.log(form);
        dataSend2("http://localhost:3000/changePassword",form);
    }

    return (
        <div className={`${styles.mainDash}`}>
            <form className={`${styles.input_fields}`} onSubmit={onSubmit}>
                <div>
                    <label>Enter Old Password:</label>
                    <input name='oldPassword' onChange={onChange} type="password" />
                </div>
                <div>
                    <label style={{ marginLeft: "-2.9%" }}>Enter New Password:</label>
                    <input name='newPassword' onChange={onChange} type="password" />
                </div>
                <div>
                    <label style={{ marginLeft: "1%" }}>Confirm Password:</label>
                    <input name='confirmPassword' onChange={onChange} type="password" />
                </div>
                <button type="submit" className={`${styles.bn}`}>Submit</button>
            </form>
        </div>
    );
}

export default ChangePassword;
