import React from "react";
import styles from './LeaveRequest.module.css';
import { useState, useEffect } from "react";


function Request() {

    const [preliminaryEnd, setPreliminaryEnd] = useState(null);
    const [preliminaryStart, setPreliminaryStart] = useState(null);
    const [timeDiff, setTimeDiff] = useState(0);
    const [isYes, setIsYes] = useState(true);

    useEffect(() => {
        if (preliminaryEnd !== null && preliminaryStart !== null) {
            let start = new Date(preliminaryEnd);
            let end = new Date(preliminaryStart);
            if (start < end) {
                alert("End date should be greater than start date!!");
                setPreliminaryEnd(null);
                setPreliminaryStart(null);
            }
            else {
                setTimeDiff((start - end) / (1000 * 60 * 60 * 24));
            }
        }
    }, [preliminaryEnd, preliminaryStart]);

    const handleN = () => {
        setIsYes(!isYes);
    }

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
                        <input type="date" name="sdate" onChange={(e) => setPreliminaryStart(e.target.value)}></input>
                    </div>
                    <div>
                        <label >End date:</label>
                        <br></br>
                        <input type="date" name="edate" onChange={(e) => setPreliminaryEnd(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Remark:</label>
                        <br></br>
                        <input type="text" placeholder="Enter Remark" name="remark"></input>
                    </div>
                    <div>
                        <label >Number of days:</label>
                        <br></br>
                        <label>{timeDiff}</label>

                    </div>
                    <div className={`${styles.radiosel}`}>
                        <label > Do you have any class on the Date of Leave:</label>
                        <div>
                            <input type="radio" id="choice" name="choice1" value="Yes" onChange={handleN} />Yes
                            <input type="radio" id="choice" name="choice1" value="No" onChange={handleN} defaultChecked={true} />No
                        </div>
                    </div>
                    <div className={isYes ? `${styles.n1}` : `${styles.n2}`}>
                        <label>If yes, please indicate the rescheduled class:</label>
                        <div>
                            <label >Date:</label>
                            <br></br>
                            <input type="date" name="redate"></input>
                        </div>
                        <div>
                            <label >Time:</label>
                            <br></br>
                            <input type="time" name="retime"></input>
                        </div>
                    </div>
                    <div className={`${styles.radiosel}`}>
                        <label > If you have any invigilation duty on the date of Leave:</label>
                        <div>
                            <input type="radio" id="choice" name="choice2" value="Yes" />Yes
                            <input type="radio" id="choice" name="choice2" value="No" />No
                        </div>
                    </div>
                    <div className={`${styles.radiosel}`}>
                        <label >Do You have any additional administrative responsibility:</label>
                        <div>
                            <input type="radio" id="choice" name="choice3" value="Yes" />Yes
                            <input type="radio" id="choice" name="choice3" value="No" />No
                        </div>
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