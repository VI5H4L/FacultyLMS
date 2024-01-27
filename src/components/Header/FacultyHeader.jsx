import React, { useState } from "react";
import styles from './Header.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import Avatar from '../../images/Avatar.png'
import { Link } from "react-router-dom";

function FacultyHeader() {

    const [isActive, setActive] = useState("false");
    const [Leavehide,setLeave_drop]=useState({display: 'none'});
    const ham = () => {
        setActive(!isActive);
    };
    const rmv = () => {
        localStorage.clear();
    };
    const dropdown1=()=>
    {
        setLeave_drop({display:'block'});

    };
    const dropdown2=()=>
    {
        console.log(Leavehide);
        setLeave_drop({display:'none'});
        console.log(Leavehide);

    };
    const name=localStorage.getItem('name');
    const email=localStorage.getItem('email');

    return (

        <div>
            <div className={`${styles.header}`}>
                <div className={isActive ? `${styles.hamburger} ` : `${styles.hamburger} ${styles.isactive}`} onClick={ham}>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                </div>
                <div className={`${styles.htitlediv}`}><h1 className={`${styles.htitle}`}>LNMIIT| FACULTY</h1></div>

            </div>
            <div className={isActive ? `${styles.sidebar} ` : `${styles.sidebar} ${styles.navactive}`}>
                <div className={`${styles.sidetext}`}>
                    <div className={`${styles.navtitle}`}><div><h2>{name}</h2></div>
                    <div><h3 style={{marginBottom: "5%",marginTop:"2%"}}>{email}</h3></div></div>
                    <ul>
                        <li ><Link className={`${styles.tabs}`} to="/profile"><div><MdPermContactCalendar /></div> <div>My Profile</div></Link></li>
                        <li><Link className={`${styles.tabs}`} to="/CHpass"><TbPasswordFingerprint /> Change Password</Link></li>
                        <li  onMouseOver={dropdown1} onMouseLeave={dropdown2}><Link className={`${styles.tabs} ${styles.dropdown}`} to="/"><BsFillGrid3X3GapFill  /> Leaves</Link>
                            <div style={Leavehide} className={`${styles.dropdown_cont}`}>
                                <Link to="/leavehistory">Leave History</Link>
                                <Link to="/leaverequest">Apply Leave</Link>
                            </div>
                        </li>
                        <li onClick={rmv}><Link className={`${styles.tabs}`} to="/"><IoMdLogOut /> Sign Out</Link></li>

                    </ul>

                </div>
                <div className={`${styles.logo}`}><h3>LNMIIT<FaRegCopyright style={{ marginLeft: "5px", marginTop: "5px", color: "black" }} /></h3></div>
            </div>
        </div>
    );
};

export default FacultyHeader;