import React from "react";
import styles from "./LeaveHistory.module.css";

function History() {

    return (
        <div className={`${styles.LvHis}`}>
            <div className={`${styles.title}`}>
                <h2>LEAVE HISTORY</h2>
            </div>
            <div className={`${styles.dashb}`}>
                <div className={`${styles.dashb1}`}>
                    <div>
                        <div><h4 style={{margin:"1px"}}>Show</h4></div>
                        <select name="show_entries" className={`${styles.Drop_down}`}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <div></div>
                    <div><input type="text" placeholder="search records" className={`${styles.form_inp}`}></input></div>
                </div>
                <div className={`${styles.table}`}>
                    <div>#</div>
                    <div>Leave Type</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Description</div>
                    <div>Posting Date</div>
                    <div>Admin Remark</div>
                    <div>Status</div>
                
               </div>
            </div>
        </div>
    );

};

export default History;