import React from 'react';
import AdminHeader from '../components/Header/AdminHeader';
import MDash2 from '../components/ManageEmployees/ManageEmployees';
import ManageE from '../components/Employees/ManageEmployee';
function ManageEmployees()
{
    return(
        <div>
            <AdminHeader />
            <ManageE />
        </div>
    );
}

export default ManageEmployees;
