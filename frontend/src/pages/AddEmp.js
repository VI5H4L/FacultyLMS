import React from 'react';
import { useState,useEffect,useContext } from 'react';
import Header from '../components/Header/AdminHeader';
import Register from '../components/Employees/Employees';
import MyContext from '../Context/createContext';
function AddEmp() {
    return (
        <div>
            <Header />
            <Register />
        </div>
    );

}

export default AddEmp;

