import React from 'react';
import ProfilePage from '../components/ProfilePage/ProfilePage';
import AdminHeader from '../components/Header/AdminHeader';

function ProfileA()
{
    return(
        <div>
            <AdminHeader />
            <ProfilePage />
        </div>
    );
}

export default ProfileA;