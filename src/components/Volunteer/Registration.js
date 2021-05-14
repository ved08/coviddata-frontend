import { useEffect, useState } from "react"
import Auth from "../../auth"
import { FcGoogle } from "react-icons/fc"
import firebase from "../../firebase"
import "./common.css"
import HeaderComp from "../HeaderComp"

const Registration = (props) => {
    const [ phoneNumber, setPhoneNumber ] = useState("")
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
        {
           size:"invisible"
            // other options
        });
    }, [])
    const onClick = () => {
        Auth.loginWithPhone(phoneNumber, () => {
            props.history.push("/volunteer")
        })
        
    }
    return(
        <div className="Registration">
            <HeaderComp />
            <header>
                <h1>Volunteer Registration</h1>
                <p className="Registration-content">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design. Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. Versions of the Lorem ipsum text have been.</p>
                <div id="verify"></div>
            </header>
            <div className="Auth-container">
                <input className="Phone-Num" type="number" placeholder="Enter phone number" onChange={e => {
                    setPhoneNumber("+91" + e.target.value)
                }}/>
                <input style={{
                    marginBottom: "20px"
                }} id="recaptcha-container" value="Get OTP" type="button" onClick={onClick} />
            </div>
        </div>
    );
}
export default Registration