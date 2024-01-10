import React from "react";
import styles from './ManageDepartments.module.css';

function MDash()
{
    return(
        <div className={`${styles.mainDash}`}>
            <div className={`${styles.h3text}`}>
                <h3>Manage Departments</h3>
            </div>

            <div className={`${styles.ADS}`} style={{width:"80%",paddingLeft:"2%",paddingRight:"2%"}}>
                <div><h4>DEPARTMENT INFO</h4></div>
                <div className={`${styles.table}`}>
                    <div>Sr No</div>
                    <div>Dept Name</div>
                    <div>Dept Short Name</div>
                    <div>Dept Code</div>
                    <div>Creation Date</div>
                    <div>Action</div>
               </div>
            </div>
        </div>
    );
}

export default MDash;