import React from 'react';
import { useState,useEffect } from 'react';
import FacultyHeader from '../components/Header/FacultyHeader';
import Request from '../components/LeaveRequest/LeaveRequest';
function FacultyLeaveRequest()
{
    // const LOCAL_STORAGE_KEY = "request";
    // const [request, setRequest] = useState([]);
    // const addLeave = (request) => {

    //     setRequest([request]);
    // };
    // useEffect(() => {
    //     if(request.length>0)
    //     {
    //       localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(request));
    //     }
    // }, [request]);
    return(
        <div>
            <FacultyHeader />
            <Request />
        </div>
    );
};

export default FacultyLeaveRequest;