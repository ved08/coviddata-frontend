import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../auth"
import HeaderComp from "../HeaderComp";
import "./common.css"
const Instr = () => {
    return(
        <div className="Instr" style={{textAlign: 'left'}}>
            <HeaderComp />
            <h1>Instructions</h1>
            <ul>
                <li>number 1</li>
                <li>number 2</li>
                <li>number 3</li>
                <li>number 4</li>
                <li>number 5</li>
            </ul>
            <Link to="/patient-data"><button className="Btn">Patients Data</button></Link>
        </div>
    );
}
export default Instr