import React,{useEffect, useState} from "react";
import styles from './AdminDashboard.module.css';
import ReqBar from "../RequestBar/RequestBar";

import axios from '../../api/axios';
import Cookies from 'js-cookie';

function ADash()
{
    // var LeaveReq=[
    //     {id:"#",name:"Faculty Name",LeaveType:"Leave Type",PostingDate:"Posting Date",status:"Status"}
    // ];
    // var LeaveReq=[{id:"1",name:"Faculty1",LeaveType:"CL",PostingDate:"10/01/2024",status:"pending",action:"action"},
    // {id:"2",name:"Faculty2",LeaveType:"PL",PostingDate:"15/01/2024",status:"pending",action:"action"}]
    // const listItem= LeaveReq.map((item)=>{
    //     return(
    //         <ReqBar id={item.id} name={item.name} lt={item.LeaveType} pd={item.PostingDate} st={item.status} act={item.action}/>
    //     );
    // });

    const [leaves,setLeaves] = useState([]);

    const token = Cookies.get('jwt');
    let listItem;
    useEffect(() => {
        getAllLeaves();
        // listItem = leaves.map((item)=>{
        //     return(
        //         <ReqBar name={item.faculty.name} lt={item.typeOfLeave} pd={item.dateCreated} st={item.status} />
        //     );
        // });
    }, [])

    const getAllLeaves = async () => {
        try {
            const response = await axios.get('/leave/',
            {
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(response.data);
            const leave = response.data;
            setLeaves(leave);


        } catch (err) {
            console.log(err);
        }
    };

    return(
        <div className={`${styles.mainDash}`}>
            {/* <div className={`${styles.Topblock}`}>
                <div className={`${styles.ADS}`}><h3>Total REDG Employees</h3><h3>4</h3></div>
                <div className={`${styles.ADS}`}><h3>Listed Departments</h3><h3>2</h3></div>
                <div className={`${styles.ADS}`}><h3>Listed Leave Type</h3><h3>4</h3></div>
            </div> */}
            <div className={`${styles.ADS}`} style={{width:"64%",paddingLeft:"2%",paddingRight:"2%"}}>
                <div><h4 className={`${styles.htxt}`}>LATEST LEAVE APPLICATIONS</h4></div>
                
                    <div className={`${styles.table}`}>
                        <th>#</th>
                        <th>Faculty Name</th>
                        <th>Leave Type</th>
                        <th>Posting Date</th>
                        <th>Status</th>
                        <th>Details</th>
                    </div>
                    <div className={`${styles.reqbar}`}>
                        {listItem}
                    </div>
            
            </div>
            

        </div>
    );
}

export default ADash;