import React from "react";
import styles from './AdminDashboard.module.css';
import ReqBar from "../RequestBar/RequestBar";
function ADash()
{
    const LeaveReq=[
        {id:"1",name:"Faculty1",LeaveType:"CL",PostingDate:"10/01/2024",status:"pending"},
        {id:"2",name:"Faculty2",LeaveType:"PL",PostingDate:"15/01/2024",status:"pending"}
    ];
    const listItem= LeaveReq.map((item)=>{
        return(
            <ReqBar id={item.id} name={item.name} lt={item.LeaveType} pd={item.PostingDate} st={item.status}/>
        );
    });
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
                    <div>#</div>
                    <div>Faculty Name</div>
                    <div>Leave Type</div>
                    <div>Posting Date</div>
                    <div>Status</div>
                    <div>Action</div>
               </div>
            </div>
            <div className={`${styles.reqbar}`}>
                {listItem}
            </div>

        </div>
    );
}

export default ADash;