import React from "react";
import "./usageMatrix.css";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

class UsageMatrix extends React.Component{
    render(){
        return(
            <div id="usage-matrix">
               
                <form>
                   <div className="date_left">
                   <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>
                    <input type="date" value="10/01/1999"/>
                    <input type="date"/>
                    </div> 
                   <div className="go"> 
                    <input type="button" value="Go"/>
                   </div> 
                   <div className="date_left">
                    <input type="searchbox" value="name" />
                    <input type="sss"/>
                    </div> 
                    <div className="filter"> 
                    <input type="button" value="Filter"/>
                   </div> 
                </form>
                <div id="text">
                    <h4>Pinfo Users by Login</h4>
                </div>
                
                <table border="1">
                    <tr>
                        <th className="cen">Name</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>10</th>
                    </tr>
                    <tr>
                        <th>Adelina Al-Sayed</th>
                        <td>.</td>
                        <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Adonis Piña Hallberg</th>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Erik Groth madsen</th>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Ankita Surve</th>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Birte Nordin</th>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Ekta Jain</th>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Lissi Koch Hansen</th>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                    </tr>
                    <tr>
                        <th>Jesper Ingelsson</th>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                        <td></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                    </tr>
                    <tr>
                        <th>Karin Johnsson</th>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                    </tr>
                    <tr>
                        <th>Pardeep Kumar</th>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                    </tr>
                    <tr>
                        <th>Karl Fredrik Knutsen</th>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                       <td className="ri-user-3-fill"></td>
                        <td>.</td>
                       <td className="ri-user-3-fill"></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default UsageMatrix;