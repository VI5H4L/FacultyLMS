import React from 'react';
import AdminHeader from '../components/Header/AdminHeader';
import ADash from '../components/AdminDashboard/AdminDashboard';
function AdminDashboard()
{
    return(
        <div>
            <AdminHeader />
            <ADash />
        </div>
    );
}

export default AdminDashboard;
