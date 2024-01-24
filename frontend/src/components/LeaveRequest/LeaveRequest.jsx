import React from "react";
import styles from './LeaveRequest.module.css';
import { useState, useEffect } from "react";



function Request() {
    const LOCAL_STORAGE_KEY = "leave";
    const [StartDate, setStartDate] = useState(null);
    const [EndDate, setEndDate] = useState(null);
    const [timeDiff, setTimeDiff] = useState(0);
    const [LeaveType, setLeaveType] = useState("Casual Leave");
    const [Remark, setRemark] = useState("");
    const [choice1, setchoice1] = useState("No");
    const [reDate, setreDate] = useState(null);
    const [reTime, setreTime] = useState(null);
    const [isYes, setIsYes] = useState(true);
    const [choice2, setchoice2] = useState("No");
    const [isYes1, setIsYes1] = useState(true);
    const [choice3, setchoice3] = useState("No");
    const [isYes2, setIsYes2] = useState(true);

    const [formValues, setFormValues] = useState([]);

    const submitForm = () => {
        setFormValues([{ LeaveType, StartDate, EndDate, Remark, choice1, reDate, reTime, choice2, choice3 }]);
    };

    useEffect(() => {
        if (formValues.length > 0) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formValues));
        }
    }, [formValues]);



    useEffect(() => {
        if (EndDate !== null && StartDate !== null) {
            let start = new Date(StartDate);
            let end = new Date(EndDate);
            if (start > end) {
                alert("End date should be greater than start date!!");
                setEndDate(null);
                setStartDate(null);
            }
            else {
                setTimeDiff((end - start) / (1000 * 60 * 60 * 24));
            }
        }
    }, [EndDate, StartDate]);

    const handleN = (a) => {
        setIsYes(!isYes);
        setchoice1(a);
    }
    const handleN1 = (a) => {
        setIsYes1(!isYes1);
        setchoice1(a);
    }
    const handleN2 = (a) => {
        setIsYes2(!isYes2);
        setchoice1(a);
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
                        <select name="show_entries" defaultValue={"Casual Leave"} onChange={(e) => setLeaveType(e.target.value)}>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Privileged/Earned Leaves">Privileged/Earned Leaves</option>
                            <option value="Special Leaves Taken">Special Leaves Taken</option>
                            <option value="Onduty Leaves Taken">Onduty Leaves Taken</option>
                        </select>
                    </div>
                    <div style={{position: 'relative'}}>
                        <label >Start date:</label>
                        <br></br>
                        <input type="date" name="sdate" onChange={(e) => setStartDate(e.target.value)}></input>

                    </div>
                    <div style={{position: 'relative'}}>
                        <label >End date:</label>
                        <br></br>
                        <input type="date" name="edate" onChange={(e) => setEndDate(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Reason:</label>
                        <br></br>
                        <input type="text" placeholder="Enter Reason" name="remark" onChange={(e) => setRemark(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Number of days:</label>
                        <br></br>
                        <label>{timeDiff}</label>

                    </div>
                    <div className={`${styles.radiosel}`}>
                        <label > Do you have any class on the Date of Leave:</label>
                        <div>
                            <input type="radio" id="choice" name="choice1" value="Yes" onChange={(e) => handleN(e.target.value)} />Yes
                            <input type="radio" id="choice" name="choice1" value="No" onChange={(e) => handleN(e.target.value)} defaultChecked={true} />No
                        </div>
                    </div>
                    <div className={isYes ? `${styles.n1}` : `${styles.n2}`}>
                        <label>If yes, please indicate the rescheduled class:</label>
                        <div style={{position: 'relative'}}>
                            <label >Date:</label>
                            <br></br>
                            <input type="date" name="redate" onChange={(e) => setreDate(e.target.value)}></input>
                        </div>
                        <div  style={{position: 'relative'}}>
                            <label >Time:</label>
                            <br></br>
                            <input type="time" name="retime" onChange={(e) => setreTime(e.target.value)}></input>
                        </div>
                    </div>
                    <div className={`${styles.radiosel}`}>
                        <label > If you have any invigilation duty on the date of Leave:</label>
                        <div>
                            <input type="radio" id="choice" name="choice2" value="Yes" onChange={(e) => handleN1(e.target.value)}/>Yes
                            <input type="radio" id="choice" name="choice2" value="No" defaultChecked={true} onChange={(e) => handleN1(e.target.value)}/>No
                        </div>
                    </div>
                    <div className={isYes1 ? `${styles.n1}` : `${styles.n2}`}>
                        <label for="file-upload">If yes please indicate the name of substitute who will perform your duty and his
                            signatures for acceptance:</label>
                        <br></br>
                        <br></br>
                        <input type="file" id="file-upload" name="PDF1" accept=".jpg, .jpeg, .pdf" />
                    </div>
                    <div className={`${styles.radiosel}`}>
                        <label >Do You have any additional administrative responsibility:</label>
                        <div>
                            <input type="radio" id="choice" name="choice3" value="Yes" onChange={(e) => handleN2(e.target.value)}/>Yes
                            <input type="radio" id="choice" name="choice3" value="No" defaultChecked={true} onChange={(e) => handleN2(e.target.value)}/>No
                        </div>
                    </div>
                    <div className={isYes2 ? `${styles.n1}` : `${styles.n2}`}>
                        <label for="file-upload">If yes who will officiate in your absence and his signatures for acceptance:</label>
                        <br></br>
                        <br></br>
                        <input type="file" id="file-upload" name="PDF2" accept=".jpg, .jpeg, .pdf" />
                    </div>
                    <div>
                        <button type="submit" className={`${styles.bn}`} onClick={submitForm}>Submit</button>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Request;