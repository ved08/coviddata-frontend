import { Link } from "react-router-dom"
import "./Homepage.css"
const Homepage = () => {
    return(
        <div className="Homepage">
            <button><Link className="Homepage-link">Patient Registration</Link></button>
            <button><Link to="/volunteer" className="Homepage-link">Volunteer</Link></button>
            <button><Link className="Homepage-link">Join The Team</Link></button>
        </div>
    );
}
export default Homepage