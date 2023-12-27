import React from "react";
import styles from './LeaveRequest.module.css';



function Request() {
    return (
        <div className={`${styles.LvHis}`}>
            <div className={`${styles.Tablediv}`}>
                <table className={`${styles.leaveT}`}>
                    <tr>
                        <th>User ID</th>
                        <th>Casual Leaves</th>
                        <th>Privileged/Earned Leaves</th>
                        <th>Special Leaves Taken</th>
                        <th>Onduty Leaves Taken</th>
                    </tr>
                    <tr>
                        <td>Faculty123@lnmiit.co.in</td>   {/*useState here*/}
                        <td>5</td>
                        <td>30</td>
                        <td>32</td>
                        <td>0</td>
                    </tr>
                </table>
            </div>
            <div className={`${styles.ReqHead}`}>
                <h3>Application</h3>
            </div>
            <div className={`${styles.subdiv}`}>
                <form className={`${styles.subform}`}>
                    <div className={`${styles.skbd}`}>
                        <label className={`${styles.kbd}`}>Select</label>
                        <select name="show_entries" defaultValue={"Casual Leave"}>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Privileged/Earned Leaves">Privileged/Earned Leaves</option>
                            <option value="Special Leaves Taken">Special Leaves Taken</option>
                            <option value="Onduty Leaves Taken">Onduty Leaves Taken</option>
                        </select>
                    </div>
                    <div>
                        <label >Start date:</label>
                        <br></br>
                        <input type="date" ></input>
                    </div>
                    <div>
                        <label >End date:</label>
                        <br></br>
                        <input type="date" ></input>
                    </div>
                    <div>
                        <label >Remark:</label>
                        <br></br>
                        <input type="text" placeholder="Enter Remark"></input>
                    </div>
                    <div>
                        <button type="submit" className={`${styles.bn}`}>Submit</button>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Request;