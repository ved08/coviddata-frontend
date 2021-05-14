import { Link } from "react-router-dom";
import HeaderComp from "../HeaderComp"
import "./Homepage.css"
const Homepage = () => {
    return(
        <div className="Homepage">
            <HeaderComp />
            <Link className="Homepage-link" to="/registration/patient"><button>Patient Registration</button></Link>
            <Link to="/volunteer" className="Homepage-link"><button>Volunteer</button></Link>
            <a href="https://forms.gle/2JW7Dv3wXRuwiXkq9" className="Homepage-link"><button>Join The Team</button></a>
        </div>
    );
}
export default Homepage