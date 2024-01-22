import React, { useState } from "react";
import styles from './Header.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import Avatar from '../../images/Avatar.png'
import { TbBracketsAngle } from "react-icons/tb";
import { MdOutlineMonitor } from "react-icons/md";
import { Link } from 'react-router-dom';


function AdminHeader() {

    const [isActive, setActive] = useState("false");

    const ham = () => {
        setActive(!isActive);
    };

    const rmv=()=>{
        localStorage.clear();
    }

    return (

        <div>
            <div className={`${styles.header}`}>
                <div className={isActive ? `${styles.hamburger} ` : `${styles.hamburger} ${styles.isactive}`} onClick={ham}>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                </div>
                <div className={`${styles.htitlediv}`}><h1 className={`${styles.htitle}`}> ELMS| ADMIN</h1></div>

            </div>
            <div className={isActive ? `${styles.sidebar} ` : `${styles.sidebar} ${styles.navactive}`}>
                <div className={`${styles.sidetext}`}>
                    <div className={`${styles.userlogo}`}><img src={Avatar} alt="User" className={`${styles.userimg}`}></img><h4>Admin</h4></div>
                    <ul className={`${styles.tabs1}`}>
                        <li><Link className={`${styles.tabs}`} to="/admin"><TbPasswordFingerprint /> Dashboard</Link></li>
                        <li><Link className={`${styles.tabs}`} to="/ManageDepartments"><BsFillGrid3X3GapFill /> Department</Link></li>
                        {/* <li><Link className={`${styles.tabs}`} to="/"><TbBracketsAngle /> Leave Type</Link></li> */}
                        <li><Link className={`${styles.tabs}`} to="/addemp"><MdPermContactCalendar /> Add Employee</Link></li>
                        {/* <li><Link className={`${styles.tabs}`} to="/ManageEmployees"><div><MdPermContactCalendar /></div> <div>Employees</div></Link></li> */}
                        <li><Link className={`${styles.tabs}`} to="/admin"><MdOutlineMonitor /> Leave Management</Link></li>
                        <li><Link className={`${styles.tabs}`} to="/CHpass"><TbPasswordFingerprint /> Change Password</Link></li>
                        <li onClick={rmv}><Link className={`${styles.tabs}`} to="/"><IoMdLogOut /> Sign Out</Link></li>

                    </ul>

                </div>
                <div className={`${styles.logo}`}><h3>LNMIIT<FaRegCopyright style={{ marginLeft: "5px", marginTop: "5px", color: "black" }} /></h3></div>
            </div>
        </div>
    );
};

export default AdminHeader;