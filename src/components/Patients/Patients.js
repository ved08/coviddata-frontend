import { useState } from "react";
import axios from "axios"

const PatientRegistration = () => {
    const [ name, setName ] = useState("")
    const [ blood, setBlood ] = useState("")
    const [ age, setAge ] = useState(0)
    const [ hospitalName, setHospitalName ] = useState("")
    const [ state, setState ] = useState("")
    const [ city, setCity ] = useState("")
    const [ phn, setPhn ] = useState("")
    const [ relationship, setRelationship ] = useState("")
    const [ requirements, setRequirements ] = useState("")
    const [ spo2, setSpo2 ] = useState("")
    const [ completeData, setCompleteData ] = useState({});

    const submitHandler = () => {
        if(name && blood && age && hospitalName && state && phn && city && relationship && requirements && spo2) {
            setCompleteData(
                {
                    "name": name, 
                    "blood": blood, 
                    "age": age, 
                    "hospitalName": hospitalName,  
                    "spo2": spo2, 
                    "state": state, 
                    "city": city, 
                    "phn": phn, 
                    "requirements": requirements, 
                    "relationship": relationship
                }
            )
            axios.post("http://localhost:5000/resources", completeData)
            .then(res => {
                console.log(res)
            })
        } else alert("All fields are required")
    }
    return(
        <div className="Patient">
            <div className="Registration-field">
                <label>Patient Name</label>
                <input type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div className="Registration-field">
                <label>Blood Group</label>
                <select onChange={e => setBlood(e.target.value)}>
                    <option disabled selected hidden>Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O++">O+</option>
                    <option value="O-">O-</option>
                    <option value="Unknown">unknown</option>
                </select>
            </div>
            <div className="Registration-field">
                <label>Age</label>
                <input type="number" onChange={e => setAge(e.target.value)} />
            </div>
            <div className="Registration-field">
                <label>Hospital Name</label>
                <input onChange={e => setHospitalName(e.target.value)}/>
            </div>
            <div className="Registration-field">
                <label>State</label>
                <select onChange={e => setState(e.target.value)}>
                    <option disabled selected hidden>Select</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className="Registration-field">
                <label>City</label>
                <input onChange={e => setCity(e.target.value)}/>
            </div>
            <div className="Registration-field">
                <label>Phone Number</label>
                <input minLength="10" maxLength="10" onChange={e => setPhn(e.target.value)}/>
            </div>
            <div className="Registration-field">
                <label>Relationship with patient</label>
                <input onChange={e => setRelationship(e.target.value)}/>
            </div>
            <div className="Registration-field">
                <label>Requirements</label>
                <input onChange={e => setRequirements(e.target.value)}/>
            </div>
            <div className="Registration-field">
                <label>spO<sub>2</sub> Level</label>
                <input onChange={e => setSpo2(e.target.value)}/>
            </div>
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}

export default PatientRegistration