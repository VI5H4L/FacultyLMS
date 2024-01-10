import React, { useState } from "react";
import styles from './Header.module.css';
import { FaRegCopyright } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import Avatar from '../../images/Avatar.png'

function FacultyHeader() {

    const [isActive, setActive] = useState("false");
    const [Leavehide,setLeave_drop]=useState({display: 'none'});
    const ham = () => {
        setActive(!isActive);
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
                    <div className={`${styles.userlogo}`}><img src={Avatar} alt="User" className={`${styles.userimg}`}></img><h4>Username</h4></div>
                    <ul>
                        <li ><a className={`${styles.tabs}`} href="/"><div><MdPermContactCalendar /></div> <div>My Profile</div></a></li>
                        <li><a className={`${styles.tabs}`} href="/"><TbPasswordFingerprint /> Change Password</a></li>
                        <li  onMouseOver={dropdown1} onMouseLeave={dropdown2}><a className={`${styles.tabs} ${styles.dropdown}`} href="/"><BsFillGrid3X3GapFill  /> Leaves</a>
                            <div style={Leavehide} className={`${styles.dropdown_cont}`}>
                                <a href="/">Leave History</a>
                                <a href="/">Apply Leave</a>
                            </div>
                        </li>
                        <li><a className={`${styles.tabs}`} href="/"><IoMdLogOut /> Sign Out</a></li>

                    </ul>

                </div>
                <div className={`${styles.logo}`}><h3>LNMIIT<FaRegCopyright style={{ marginLeft: "5px", marginTop: "5px", color: "black" }} /></h3></div>
            </div>
        </div>
    );
};

export default FacultyHeader;