import { Link } from "react-router-dom"
import "./PatientLinks.css"
const PatientLinks = (props) => {
    const links = props.links;
    console.log(links)
    return(
        <div className="Patient-Links">
            <h2>Links</h2>
            <ul>
                {links.length ? links.map((e, i) => (
                    <li key={i}>{e}</li>
                )) : <div>
                        <p>Links not available. Please Register</p>
                        <Link className="Register-Link" to="/registration/patient"><button>Register</button></Link>
                    </div>
                }
                <h2>Instructions</h2>
                <ul>
                    <li>instruction 1</li>
                    <li>instruction 2</li>
                    <li>instruction 3</li>
                    <li>instruction 4</li>
                </ul>
            </ul>
            <button>Share</button>
        </div>
    );
}

export default PatientLinks