import React from "react";
import styles from './RequestBar.module.css';

function ReqBar(props)
{
    return(
        <div className={`${styles.bars}`}>
            <h3>{props.id}</h3>
            <h3>{props.name}</h3>
            <h3>{props.lt}</h3>
            <h3>{props.pd}</h3>
            <h3>{props.st}</h3>
            <form className={`${styles.selection_panel}`}>
                <div className={`${styles.approve}`}><input type="radio"   id="choice" name="action" value="yes" />Approve</div>

                <div className={`${styles.deny}`}><input type="radio"   id="choice" name="action" value="no" />Deny</div>
            </form>
        </div>
    );
}
export default ReqBar;