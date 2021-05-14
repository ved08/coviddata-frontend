import { Link } from "react-router-dom"
import imageToBase64 from "image-to-base64/browser" 
import HeaderComp from "../HeaderComp";
import "./PatientLinks.css"
const PatientLinks = (props) => {
    const { links, data } = props
    // console.log(links, data)
    const { name, blood, age, hospitalName, spo2, requirements, relationship, state, city, phn } = data;
    const imageUrl = `https://rophyllo.sirv.com/Images/Covid%20Poster.jpg?text=Name:%20${name}%0AAge:%20${age}%0ARequirements:%20${requirements}%0ARelationship:%20${relationship}%0ABlood%20Group:%20${blood}%0AHospital%20Name:%20${hospitalName}%0ASPO2:%20${spo2}%0AState:%20${state}%0ACity:%20${city}%0APhone%20Number:%20${phn}&text.font.size=40&text.color=black&text.align=left&text.position=center&text.font.family=OpenSans&text.font.weight=600` 
    
    const convertToBase64 = () => {
        let base64URL = "";
        imageToBase64(imageUrl).then(res => {
            base64URL = "data:image/png;base64,".concat(res);
        })
        return base64URL
    }
    return(
        <div className="Patient-Links">
            <HeaderComp />
            <h1>Links</h1>
            <ul>
                {links.length ? links.map((e, i) => (
                    <li key={i}>{e}</li>
                )) : <div>
                        <p>Links not available. Please Register</p>
                        <Link className="Register-Link" to="/registration/patient"><button>Register</button></Link>
                    </div>
                }
                <h2>Instructions</h2>
                <ul>
                    <li>instruction 1</li>
                    <li>instruction 2</li>
                    <li>instruction 3</li>
                    <li>instruction 4</li>
                </ul>
            </ul>
            <button className="Share-btn" onClick={async () => {
                if(navigator.share) {
                    const base64url = convertToBase64(document.getElementById("share-image"));
                    const blob = await (await fetch(base64url)).blob();
                    const file = new File([blob], 'fileName.png', { type: blob.type });
                    await navigator.share({
                    title: "Share on Social Media",
                    text: 'Image caption here',
                    files: [file],
                    })
                } else {
                    alert("Share option not available.")
                }
            }}>Share</button>
            <img className="Image-poster" id="share-image" src={imageUrl} alt="Image unavailable"/>
        </div>
    );
}

export default PatientLinks