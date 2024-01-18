import React from 'react';
import AdminHeader from '../components/Header/AdminHeader';
import Register from '../components/Employees/Employees';
function AdminEmployee()
{
    return(
        <div>
            <AdminHeader />
            <Register />
        </div>
    );
}

export default AdminEmployee;