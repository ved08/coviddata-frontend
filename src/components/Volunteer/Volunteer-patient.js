import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import HeaderComp from "../HeaderComp"
import { withRouter } from "react-router-dom"
import "./common.css"
const VolunteerPatient = props => {
    const [ selectedState, setSelectedState ] = useState("");
    const [requirements, setRequirement] = useState("")
    const [ data, setData ] = useState([]);
    const [showContent, setShowContent] = useState(false)
    const getPatientData = () => {
        axios.post("https://coviddata.vedvardhan.repl.co/datapatients", {
            state: selectedState,
            requirements
        }).then(res => {
            const { data } = res;
            const JSONData = eval(data)
            setData(JSONData)
        }).catch(err => alert(err.message))
    }
    const help = (data) => {
        axios.post("https://coviddata.vedvardhan.repl.co/resources", data)
            .then(res => {
                const str = eval(res.data)
                console.log(str)
                console.log(data)
                props.links(str)
                props.data(data)
                props.history.push('/patient/links')
            })
            .catch(err => alert(err.message))
    }
    let mobileTable = (
    <div>
        <button onClick={() => {
            setShowContent(prevState => !prevState)
        }} style={{
            position: "absolute",
            right: 0,
            top: "50%"
        }}>{showContent ? "Hide data" : "Show more"}</button>
        <table>
            <thead>
                <th>Patient's Name</th>
                <th>Requirements</th>
                <th>Age</th>
                { showContent ?
                <Fragment>
                    <th>Blood Group</th>  
                    <th>Hospital</th>
                    <th>State</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>spO<sub>2</sub> Level</th>
                </Fragment> : null}
            </thead>
            <tbody>
                {data.map((e, i) => (
                    <tr key={i}>
                        <td style={{textDecoration: "none"}} onClick={() => help({
                                "name": e["Patient's Name"],
                                "age": e["Age"],
                                "hospitalName": e["Hospital"],
                                "state": e["State"],
                                "city": e["City"],
                                "phn": e["Phone Number"],
                                "requirements": e["Requirements"],
                                "spo2": e["Spo2 level"],
                                "blood": e["Blood Group"]
                        })} className="Help-btn">{e["Patient's Name"]}</td>
                        <td>{e["Requirements"]}</td>
                        <td>{e["Age"]}</td>
                        {showContent ? <Fragment>
                            <td>{e["Blood Group"]}</td>
                            <td>{e["Hospital"]}</td>
                            <td>{e["State"]}</td>
                            <td>{e["City"]}</td>
                            <td>{e["Phone Number"]}</td>
                            
                            <td>{e["Spo2 level"]}</td>
                        </Fragment> : null}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)

    return(
        <div className="Volunteer-Patient">
            <HeaderComp />
            <div className="VP-Filter-container">
                <label>Select State</label>
                <select style={{
                    width: "257px",
                    height: "40px",
                    margin: "5px",
                    marginBottom: "10px"
                }} onChange={e => setSelectedState(e.target.value)}>
                    <option hidden disabled selected>Select</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamin Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Maharashtra">Maharashtra</option>
                </select>
                <button className="Btn" style={{
                    marginTop: "5px"
                }} onClick={getPatientData}>Get Data</button>
            </div>
            <div className="Table-container" id="Table-container">
                {data.length ? 
                window.innerWidth > 600 ? <table>
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
                    <tbody>
                        {data.map((e, i) => (
                            <tr key={i}>
                                <td style={{textDecoration: "none"}} onClick={() => help({
                                "name": e["Patient's Name"],
                                "age": e["Age"],
                                "hospitalName": e["Hospital"],
                                "state": e["State"],
                                "city": e["City"],
                                "phn": e["Phone Number"],
                                "requirements": e["Requirements"],
                                "spo2": e["Spo2 level"],
                                "blood": e["Blood Group"]
                            })} className="Help-btn">{e["Patient's Name"]}</td>
                                <td>{e["Blood Group"]}</td>
                                <td>{e["Age"]}</td>
                                <td>{e["Hospital"]}</td>
                                <td>{e["State"]}</td>
                                <td>{e["City"]}</td>
                                <td>{e["Phone Number"]}</td>
                                <td>{e["Requirements"]}</td>
                                <td>{e["Spo2 level"]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> : mobileTable : 
                null}
            </div>
        </div>
    )
}

export default withRouter(VolunteerPatient)