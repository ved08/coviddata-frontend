import { Link } from "react-router-dom"
import "./Homepage.css"
const Homepage = () => {
    return(
        <div className="Homepage">
            <Link className="Homepage-link" to="/registration/patient"><button>Patient Registration</button></Link>
            <Link to="/volunteer" className="Homepage-link"><button>Volunteer</button></Link>
            <Link className="Homepage-link"><button>Join The Team</button></Link>
        </div>
    );
}
export default Homepage