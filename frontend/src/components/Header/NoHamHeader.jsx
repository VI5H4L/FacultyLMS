import React, { useState } from "react";
import styles from './Header.module.css';
import { FaRegCopyright } from "react-icons/fa";

function NoHamHeader() {

    const [isActive, setActive] = useState("false");

    const ham = () => {
        setActive(!isActive);
    };

    return (

        <div>
            <div className={`${styles.header}`}>
                <div></div>
                <div className={`${styles.htitlediv}`}><h1 className={`${styles.htitle}`}>LMS| LEAVE MANAGEMENT SYSTEM</h1></div>

            </div>

        </div>




    );

};

export default NoHamHeader;