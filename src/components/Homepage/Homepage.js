import { Link } from "react-router-dom";
import HeaderComp from "../HeaderComp"
import "./Homepage.css"
const Homepage = () => {
    return(
        <div className="Homepage">
            <HeaderComp />
            <header>
                <h1>Covid Node</h1>
                <h2>An intiative by <a href="https://codingforall.org">Coding For All</a></h2>
            </header>
            <Link className="Homepage-link" to="/registration/patient"><button>Patient Registration</button></Link>
            <Link to="/volunteer" className="Homepage-link"><button>Volunteer</button></Link>
            <Link to="/join-team" className="Homepage-link"><button>Join The Team</button></Link>
        </div>
    );
}
export default Homepage