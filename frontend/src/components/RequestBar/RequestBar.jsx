import React from "react";
import styles from './RequestBar.module.css';

function ReqBar(props)
{
    return(
        
                
        <tr className={`${styles.bars}`}>
                    <td>
                        <h3>{props.id}</h3>
                    </td>
                    <td>
                        <h3>{props.name}</h3>
                    </td>
                    <td>
                        <h3>{props.lt}</h3>
                    </td>
                    <td>
                        <h3>{props.pd}</h3>
                    </td>
                    <td>
                        <h3>{props.st}</h3>
                    </td>
                    <td>
                        <button>{props.act}</button>
                    </td>

                                    {/*<form className={`${styles.selection_panel}`}>
                    <div className={`${styles.approve}`}><input type="radio"   id="choice" name="action" value="yes" />Approve</div>
                    <div className={`${styles.deny}`}><input type="radio"   id="choice" name="action" value="no" />Deny</div>
                </form>*/}
                <div style={{position:"absolute"}} className={`${styles.popup}`}> <h3>I am Harshit</h3></div>
        </tr>

            
    );
}
export default ReqBar;