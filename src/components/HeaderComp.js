import { Link } from "react-router-dom";
import CFA from "../assets/codingforall(full).png"
import CovidNode from "../assets/logo.png"
const HeaderComp = () => {
return(
    <div className="image-container" style={{
        marginBottom: "20px",
        width: "100%",
        textAlign: "center",
    }}>
        <Link to="/">
            <img src={CovidNode} style={{
                marginBottom: 0,
                width: 100,
                margin: 20
            }}/>
        </Link>
        <header>
            {/* <h1 style={{
                margin: 0,
                marginTop: -15
            }}>Covid Node</h1> */}
            {/* <img src={CovidNode} style={{
                width: 100
            }}/> */}
            <h2 style={{
                margin: 0
            }}>An intiative by <a style={{
                textDecoration: "none",
                // color: "#007EC6",
                color: "#F8C404"
            }} href="https://codingforall.in"><img src={CFA} style={{
                width: 150
            }}/></a></h2>
        </header>
    </div>
);
}

export default HeaderComp