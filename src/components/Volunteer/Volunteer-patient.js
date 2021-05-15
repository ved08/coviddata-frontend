import axios from "axios";
import { useEffect, useState } from "react"
import HeaderComp from "../HeaderComp"
import "./common.css"

const VolunteerPatient = () => {
    const [ selectedState, setSelectedState ] = useState("");
    const [ data, setData ] = useState([])
    const getPatientData = () => {
        axios.post("https://coviddata.vedvardhan.repl.co/datapatients", {
            state: selectedState
        }).then(res => {
            const { data } = res;
            let str = data.split("")
                for (let i = 0; i <= str.length; i++) {
                    if(str[i] == "'") {
                        if(str[i+1] !== 's') {
                            str[i] = '"'
                        }
                    }
                }
                str = str.join("")
                // console.log(str)
                str = JSON.parse(str)
                setData(str)
        })
    }
    return(
        <div className="Volunteer-Patient">
            <HeaderComp />
            <div class="VP-Filter-container">
                <select style={{
                    width: "257px",
                    height: "40px"
                }} onChange={e => setSelectedState(e.target.value)}>
                    <option hidden disabled selected>Select</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamin Nadu">Tamin Nadu</option>
                    <option value="Telangana">Telangana</option>
                </select>
                <button className="Btn" onClick={getPatientData}>Get Data</button>
            </div>
            <div className="Table-container">
                {data && <table>
                    <thead>
                        <th>Patient's Name</th>
                        <th>Blood Group</th>
                        <th>Age</th>
                        <th>Hospital</th>
                        <th>State</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Requirements</th>
                        <th>spO<sub>2</sub> Level</th>
                    </thead>
                    {data.map((e, i) => (
                        <tbody key={i}>
                            <td>{e["Patient's Name"]}</td>
                            <td>{e["Blood Group"]}</td>
                            <td>{e["Age"]}</td>
                            <td>{e["Hospital"]}</td>
                            <td>{e["State"]}</td>
                            <td>{e["City"]}</td>
                            <td>{e["Phone Number"]}</td>
                            <td>{e["Requirements"]}</td>
                            <td>{e["Spo2 level"]}</td>
                        </tbody>
                    ))}
                </table>}
            </div>
        </div>
    )
}

export default VolunteerPatient