import React, { useEffect, useState, useSyncExternalStore } from "react";
import styles from './ProfilePage.module.css';
function ProfilePage() {
    const name=localStorage.getItem('name');
    const email=localStorage.getItem('email');
    const designation=localStorage.getItem('pos');
    const department=localStorage.getItem('department');
    const empno=localStorage.getItem('empno');
    const doj=localStorage.getItem('doj');
    return (
        <div>
            <div className={`${styles.mainDash}`}>
                <div className={`${styles.profarea}`}>
                    <div>
                        <h2>Welcome {name}</h2>
                    </div>
                    <div className={`${styles.fields}`}>
                        <h4>Employee Number:</h4>
                        <input type="text" disabled="disabled" placeholder={empno} className={`${styles.inp}`} />
                    </div>
                    <div className={`${styles.fields}`}>
                        <h4>Email ID:</h4>
                        <input type="text" disabled="disabled" placeholder={email} className={`${styles.inp}`} />
                    </div>
                    <div className={`${styles.fields}`}>
                        <h4>Designation:</h4>
                        <input type="text" disabled="disabled" placeholder={designation} className={`${styles.inp}`} />
                    </div>
                    <div className={`${styles.fields}`}>
                        <h4>Department:</h4>
                        <input type="text" disabled="disabled" placeholder={department} className={`${styles.inp}`} />
                    </div>
                    <div className={`${styles.fields}`}>
                        <h4>Date of joining:</h4>
                        <input type="text" disabled="disabled" placeholder={doj} className={`${styles.inp}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
