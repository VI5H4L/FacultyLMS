import './App.css';
import Home from './pages/Login';
import FacultyHistory from './pages/FacultyLeaveHistory';
import { Route,Switch } from 'react-router-dom';
import React from 'react';
import FacultyLeaveRequest from './pages/FacultyLeaveRequest';
import AdminDashboard from './pages/AdminDashboard';
import ManageDepartments from './pages/ManageDepartment';
import ManageEmployees from './pages/ManageEmployees';
import CHpass from './pages/ChangePassword';
function App() {
  return (
    <React.Fragment>
        <Home />
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
