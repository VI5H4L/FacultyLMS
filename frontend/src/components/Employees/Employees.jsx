import React, { useContext, useState } from 'react';
import styles from './Employees.module.css';
import axios from '../../api/axios';
import Cookies from 'js-cookie';


const Register = () => {

    const token = Cookies.get('jwt');
    const [errMsg,setErrMsg] = useState('');

    const [formData, setFormData] = useState({
        employeeNo: '',
        email: '',
        designation: '',
        department: '',
        dateOfJoining: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleInputChange1 = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value.toLowerCase()
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('');
        try {
            console.log(formData,token);
            const response = await axios.post('/faculty/',
                formData ,
                {
                    headers : {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log(response);
            
        } catch (err) {
            console.log(err);
            if (err.response.status == 401) {
                setErrMsg("Email is not of required Domain");
            }
            alert(errMsg);
        };
        
    };

    return (
        <div className={`${styles.Login}`}>
            <div><h1>ADD EMPLOYEES</h1></div>
            <div className={`${styles.form}`}>
                <form className={`${styles.form_div}`}>
                    <input
                        className={`${styles.form_inp}`}
                        type="text"
                        name="employeeNo"
                        placeholder="Employee Number"
                        value={formData.employeeNo}
                        onChange={handleInputChange}
                    />
                    <input
                        className={`${styles.form_inp}`}
                        type="email"
                        name="email"
                        placeholder="Email id"
                        value={formData.email}
                        onChange={handleInputChange1}
                    />
                    {/*<input
                        className={`${styles.form_inp}`}
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={formData.designation}
                        onChange={handleInputChange}
    />*/}
                    <div ><label>Designation:</label><select value={formData.designation} onChange={handleInputChange} name="designation" id="designation"  className={`${styles.form_inp}`}>
                    <option value="faculty">Faculty</option>
                    <option value="hod">HOD</option>
                    <option value="dofa">DOFA</option>
                    <option  value="director">Director</option>
                    <option  value="admin">Admin</option>
                </select></div>
                    {/*<input
                        className={`${styles.form_inp}`}
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={formData.department}
                        onChange={handleInputChange}
    />*/}
                    <div style={{ position: 'relative' }}>
                    <label>Date of joining:</label>
                        <input
                            className={`${styles.form_inp}`}
                            type="date"
                            name="dateOfJoining"
                            placeholder="Date of Joining"
                            value={formData.dateOfJoining}
                            onChange={handleInputChange}
                        /></div>
                    <div >
                    <label>Department:</label>
                    <select value={formData.department} onChange={handleInputChange} name="department" id="department"  className={`${styles.form_inp}`}>
                        <option value="CSE">CSE</option>
                        <option value="CCE">CCE</option>
                        <option value="ECE">ECE</option>
                        <option  value="MME">MME</option>
                    </select></div>
                    {/*
                    <input 
                        className={`${styles.form_inp}`} 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <input 
                        className={`${styles.form_inp}`} 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
    /> */}
                    <div className={`${styles.form_but}`}>
                        <button type="submit" onClick={handleSubmit}>SIGN UP</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
