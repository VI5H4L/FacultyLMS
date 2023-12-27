import React, { useState } from "react";
import styles from './Header.module.css';
import { FaRegCopyright } from "react-icons/fa";

function Header() {

    const [isActive, setActive] = useState("false");

    const ham = () => {
        setActive(!isActive);
    };

    return (

        <div>
            <div className={`${styles.header}`}>
                <div className={isActive ? `${styles.hamburger} ` : `${styles.hamburger} ${styles.isactive}`} onClick={ham}>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                    <span className={isActive ? `${styles.line}` : `${styles.line} ${styles.isactive}`}></span>
                </div>
                <div className={`${styles.htitlediv}`}><h1 className={`${styles.htitle}`}>LMS| LEAVE MANAGEMENT SYSTEM</h1></div>

            </div>
            <div className={isActive ? `${styles.sidebar} ` : `${styles.sidebar} ${styles.navactive}`}>
                <div className={`${styles.sidetext}`}>
                    <ul>
                        <li><a href="/">Faculty Login</a></li>
                        <li><a href="/">HOD Login</a></li>
                        <li><a href="/">Admin Login</a></li>
                    </ul>
                    
                </div>
                <div className={`${styles.logo}`}><h3>LNMIIT<FaRegCopyright style={{marginLeft:"5px",marginTop:"5px",color:"black"}}/></h3></div>
            </div>
        </div>




    );

};

export default Header;