import { Link } from "react-router-dom"
import imageToBase64 from "image-to-base64/browser" 
import HeaderComp from "../HeaderComp";
import "./PatientLinks.css"
const PatientLinks = (props) => {
    const { links, data } = props
    // console.log(links, data)
    const { name, blood, age, hospitalName, spo2, requirements, relationship, state, city, phn } = data;
    const imageUrl = `https://rophyllo.sirv.com/Images/Covid%20Poster.jpg?text=Name:%20${name}%0ABlood%20Group:%20${blood}%0AAge:%20${age}%0AState:%20${state}%0AHospital%20Name:%20${hospitalName}%0ACity:%20${city}%0APhone%20Number:%20${phn}%0AResources%20Required:%20${requirements}%0ASPO2:%20${spo2}&text.font.size=40&text.color=black&text.align=left&text.position=center&text.font.family=OpenSans&text.font.weight=600` 
    return(
        <div className="Patient-Links">
            <HeaderComp />
            <h1>Links</h1>
            <ul>
                {links.length ? links.map((e, i) => (
                    <li key={i}>{e}</li>
                )) : <div>
                        <p>Links not available. Please register first</p>
                        <Link className="Register-Link" to="/registration/patient"><button className="Btn">Register</button></Link>
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
            <div className="Share-container">
                <div className="Image-container">
                    <img className="Image-poster" id="share-image" src={imageUrl} alt="Image unavailable"/>
                </div>
                <div className="Share-btn-container">
                    <p className="Share-btn-p">Some content related to sharing option. Where to share, who to share, what are the tags and who to mention. etc, etc. Any other content related to this goes here.</p>
                    <button className="Btn" onClick={async () => {
                        if(navigator.share) {
                            const blob = await fetch(imageUrl).then(r=>r.blob())
                            const file = new File([blob], 'fileName.png', { type: blob.type });
                            console.log({file})
                            await navigator.share({
                            title: "Share on Social Media",
                            text: 'Urgent Help Needed!',
                            files: [file],
                            })
                        } else {
                            alert("Share option not available.")
                        }
                    }}>Share</button>
                </div>
            </div>
            
        </div>
    );
}

export default PatientLinks