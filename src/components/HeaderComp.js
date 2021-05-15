import { Link } from "react-router-dom";
import CfaLogo from "../assets/codingforall(full).png";
const HeaderComp = () => {
return(
    <div className="image-container" style={{
        marginBottom: "20px",
        width: "100%",
        textAlign: "center"
    }}>
        <Link to="/">
            <img src={CfaLogo} style={{
                marginBottom: 0,
                width: "150px",
                marginTop: "20px"
            }}/>
        </Link>
        <header>
            <h1 style={{
                margin: 0,
                marginTop: -15
            }}>Covid Node</h1>
            <h2 style={{
                margin: 0
            }}>An intiative by <a style={{
                textDecoration: "none",
                color: "#f8c608",
            }} href="https://codingforall.in">Coding For All</a></h2>
        </header>
    </div>
);
}

export default HeaderComp