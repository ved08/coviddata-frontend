import Auth from "../../auth"
import { useEffect } from "react";
import "./common.css"

const Registration = (props) => {
    const verifyBtn = document.getElementById('verify')
    return(
        <div className="Registration">
            <button onClick={() => Auth.login(() => {

                props.history.push("/volunteer")
            }, 'verify')}>Login With Google</button>
            <button id="verify">Verify</button>
        </div>
    );
}
export default Registration