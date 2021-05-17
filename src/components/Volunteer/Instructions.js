import axios from "axios";
import { useState } from "react";
import { Link, Route } from "react-router-dom";
import Auth from "../../auth"
import HeaderComp from "../HeaderComp";
import "./common.css"
const Instr = () => {
    return(
        <div className="Instr" style={{textAlign: 'left'}}>
            <HeaderComp />
            <h1>Instructions</h1>
            <ul style={{
                fontSize: "18px"
            }}>
                <li>You can choose the state in which you can provide help and support the patients in finding resources.</li>
                <li>You will be directed to a page with links of support organisations or group who can help as well as links of resources we compiled.</li>
                <li>You can also amplify the issue by posting a social media post we have created in the right format(Click the share button to post it on all the social media platforms or just save/download it).</li>
            </ul>
            <Link to="/patient-data"><button className="Btn">Patients Data</button></Link>

        </div>
    );
}
export default Instr