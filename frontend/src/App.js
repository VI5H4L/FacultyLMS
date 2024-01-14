import './App.css';
import Home from './pages/Login';
import FacultyHistory from './pages/FacultyLeaveHistory';
import { useState } from 'react';
import { Route,Switch } from 'react-router-dom';
import React from 'react';
import FacultyLeaveRequest from './pages/FacultyLeaveRequest';
import AdminDashboard from './pages/AdminDashboard';
import ManageDepartments from './pages/ManageDepartment';
import ManageEmployees from './pages/ManageEmployees';
import CHpass from './pages/ChangePassword';
import Profile from './pages/Profile';
function App() {

  return (
    <React.Fragment>
        <Home/>
        <Profile />
        <FacultyHistory />
        <FacultyLeaveRequest/>
        <AdminDashboard />
        <ManageDepartments /> 
        <ManageEmployees />
        <CHpass />

    </React.Fragment>
  );
}

export default App;
