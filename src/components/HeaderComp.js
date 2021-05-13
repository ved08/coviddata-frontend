import { Link } from "react-router-dom";
import CfaLogo from "../assets/codingforall.png";
const HeaderComp = () => {
return(
    <div className="image-container">
    <Link to="/">
        <img src={CfaLogo}/>
    </Link>
</div>
);
}

export default HeaderComp