import axios from "axios";
import { useEffect, useState } from "react"
import HeaderComp from "../HeaderComp"
import "./common.css"

const VolunteerPatient = () => {
    const [ selectedState, setSelectedState ] = useState("");
    const getPatientData = () => {
        axios.post("https://coviddata.vedvardhan.repl.co/datapatients", {
            state: selectedState
        }).then(res => {
            console.log(res.data)
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
        </div>
    )
}

export default VolunteerPatient