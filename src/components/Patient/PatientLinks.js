import { Link } from "react-router-dom"
import "./PatientLinks.css"
const PatientLinks = (props) => {
    const { links, data } = props
    // console.log(links, data)
    const { name, blood, age, hospitalName, spo2, requirements, relationship, state, city, phn } = data;
    const imageUrl = `https://rophyllo.sirv.com/Images/a4-paper.jpg?text=Urgent%20Help%20Needed%0A%0A%0A%0A%0AName:%20${name}%0Aage:%20${age}%0Arequirements:%20${requirements}%0Arelationship:%20${relationship}%0Ablood:%20${blood}%0AhospitalName:%20${hospitalName}%0Aspo2:%20${spo2}%0Astate:%20${state}%0Acity:%20${city}%0Aphn:%20${phn}&text.font.size=16px&text.color=black&text.align=left&text.position=center` 
    
    const convertToBase64 = (img) => {
        // img.crossOrigin = 'Anonymous';
        // let canvas = document.createElement("canvas");
        // canvas.width = img.width;
        // canvas.height = img.height;
        // var ctx = canvas.getContext("2d");
        // ctx.drawImage(img, 0, 0);
        // var dataURL = canvas.toDataURL("image/png")
        // console.log(dataURL)
        // return dataURL
        console.log("Hello world")
        // return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }
    return(
        <div className="Patient-Links">
            <h2>Links</h2>
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
            <button onClick={async () => {
                if(navigator.share) {
                    const base64url = convertToBase64(document.getElementById("share-image"));
                    const blob = await (await fetch(base64url)).blob();
                    const file = new File([blob], 'fileName.png', { type: blob.type });
                    await navigator.share({
                    title: "Share on Social Media",
                    text: 'Image caption here',
                    files: [file],
                    })
                    // share feature available
                    // await navigator.share({
                    //     title: "Title",
                    //     url: imageUrl,
                    //     text: "Urgent Help Needed"
                    // })
                } else {
                    console.log("Share option not available")
                }
            }}>Share</button>
            <img id="share-image" src={imageUrl} alt="Image unavailable"/>
        </div>
    );
}

export default PatientLinks