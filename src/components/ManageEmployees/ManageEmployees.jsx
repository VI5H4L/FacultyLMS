import React from "react";
import styles from './ManageEmployees.module.css';

function MDash2()
{
    return(
        <div className={`${styles.mainDash}`}>
            <div className={`${styles.h3text}`}>
                <h3>Manage Employees</h3>
            </div>

            <div className={`${styles.ADS}`} style={{width:"80%",paddingLeft:"2%",paddingRight:"2%"}}>
                <div><h4>EMPLOYEES INFO</h4></div>
                <div className={`${styles.table}`}>
                    <div>Sr No</div>
                    <div>ID</div>
                    <div>Full Name</div>
                    <div>Department</div>
                    <div>Status</div>
                    <div>Reg Date</div>
                    <div>Action</div>
               </div>
            </div>
        </div>
    );
}

export default MDash2;