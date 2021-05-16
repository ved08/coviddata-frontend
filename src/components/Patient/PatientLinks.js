import { Link } from "react-router-dom"
import imageToBase64 from "image-to-base64/browser" 
import HeaderComp from "../HeaderComp";
import "./PatientLinks.css"
const PatientLinks = (props) => {
    const { links, data } = props;
    console.log(links)
    const { name, blood, age, hospitalName, spo2, requirements, relationship, state, city, phn } = data;
    const imageUrl = `https://rophyllo.sirv.com/Images/Covid%20Poster.jpg?text=Name:%20${name}%0ABlood%20Group:%20${blood}%0AAge:%20${age}%0AState:%20${state}%0AHospital%20Name:%20${hospitalName}%0ACity:%20${city}%0APhone%20Number:%20${phn}%0AResources%20Required:%20${requirements}%0ASPO2:%20${spo2}&text.font.size=40&text.color=black&text.align=left&text.position=center&text.font.family=OpenSans&text.font.weight=600` 
    return(
        <div className="Patient-Links">
            <HeaderComp />
            <h1>Links</h1>
            <ul>
                {links.length ? links.map((e, i) => (
                    <li key={i}><a href={e}>{e}</a></li>
                )) : <div>
                        <p>Links not available. Please register first</p>
                        <Link className="Register-Link" to="/registration/patient"><button className="Btn">Register</button></Link>
                    </div>
                }
                <h2>Points to be noted</h2>
                <ul>
                    <li>The links take you to all the help we found on the internet based on your query.</li>
                    <li>We have attached a link with some NGOs and Voluntary groups that can help you.</li>
                    <li>We have created a social media post for you in the right format to get help. Post it on all your social media plattforms(WhatsApp, Instagram, Twitter, Facebook etc, tag your friends and ask them to share).</li>
                    <li>We will send your requirements to some of the organisations working on ground to help you.</li>
                </ul>
            </ul>
            <div className="Share-container">
                <div className="Image-container">
                    <img className="Image-poster" id="share-image" src={imageUrl} alt="Image unavailable"/>
                </div>
                <div className="Share-btn-container">
                    <p className="Share-btn-p">{navigator.share ?
                     "We created a social media post for you based on your requirements. The format helps people/support groups understand your needs better. Click the share button to share the post on various platforms like WhatsApp, Facebook, Instagram, Linkedin, twitter" :
                     "We created a social media post for you based on your requirements. The format helps people/support groups understand your needs better. Download the post by clicking the “Download” button. Share the post in all social medial platforms like twitter, Facebook, LinkedIn etc. We recommend you to use phone to share it on WhatsApp and Instagram too."}</p>
                    {
                        navigator.share ? (
                            <button className="Btn " onClick={async () => {
                                const blob = await fetch(imageUrl).then(r=>r.blob())
                                const file = new File([blob], 'fileName.png', { type: blob.type });
                                console.log({file})
                                await navigator.share({
                                    title: "Share on Social Media",
                                    text: 'Urgent Help Needed!',
                                    files: [file],
                                })
                            }}>Share</button>
                        ) : (
                            <a className="Btn" style={{
                                textDecoration: "none",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} href={imageUrl} download="Share.png">Download</a>
                        )
                    }
                    
                </div>
            </div>
            
        </div>
    );
}

export default PatientLinks