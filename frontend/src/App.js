import './App.css';
import Home from './pages/Login';
import FacultyHistory from './pages/FacultyLeaveHistory';
import { useState } from 'react';
import { Route,Routes,Switch } from 'react-router-dom';
import React from 'react';
import FacultyLeaveRequest from './pages/FacultyLeaveRequest';
import AdminDashboard from './pages/AdminDashboard';
import ManageDepartments from './pages/ManageDepartment';
import ManageEmployees from './pages/ManageEmployees';
import CHpass from './pages/ChangePassword';
import Profile from './pages/Profile';
import AddEmp from './pages/AddEmp';

function App() {

  return (
    <React.Fragment>
      <Routes>
     <Route path='/' element={ <Home/>}></Route>
     <Route path='/leavehistory' element={<FacultyHistory></FacultyHistory>}></Route>
     <Route path='/profile' element={<Profile></Profile>}></Route>
     <Route path='/leaverequest' element={<FacultyLeaveRequest></FacultyLeaveRequest>}></Route>
<Route path='/admin' element={<AdminDashboard></AdminDashboard>}></Route>
<Route path='/ManageDepartments' element={<ManageDepartments></ManageDepartments>}></Route>
<Route path='/ManageEmployees' element={ <ManageEmployees />}></Route>
<Route path='/CHpass' element={ <CHpass />}></Route>
<Route path='/addemp' element={ <AddEmp />}></Route>

      </Routes>


    </React.Fragment>
  );
}

export default App;
