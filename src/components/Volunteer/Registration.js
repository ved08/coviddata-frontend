import { useEffect, useState } from "react"
import Auth from "../../auth"
import { FcGoogle } from "react-icons/fc"
import firebase from "../../firebase"
import "./common.css"
import HeaderComp from "../HeaderComp"
const Registration = (props) => {
    const [ phoneNumber, setPhoneNumber ] = useState("");
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
        {
           size:"invisible"
            // other options
        });
    }, [])
    const onClick = () => {
        setLoading(true)
        Auth.loginWithPhone(phoneNumber, () => {
            setLoading(false)
            props.history.push("/volunteer")
        }, () => {
            setLoading(false)
        })
        
    }
    return(
        <div className="Registration">
            <HeaderComp />
            <header>
                <h1>Volunteer Registration</h1>
                <p 
                className="Registration-content">Dear Supporter we are glad that you wish to help people in need. Our database shows the requirements posted in last 24 hours by people who need covid support/help.</p>
                <div id="verify"></div>
            </header>
            <div className="Auth-container">
                <input className="Phone-Num" type="number" placeholder="Enter phone number" onChange={e => {
                    setPhoneNumber("+91" + e.target.value)
                }}/>
                {loading && <p>Loading...</p>}
                <input style={{
                    marginBottom: "20px"
                }} id="recaptcha-container" value="Get OTP" type="button" onClick={() => onClick()} />
            </div>
        </div>
    );
}
export default Registration