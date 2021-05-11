import axios from "axios";
import { useEffect, useState } from "react";
import Auth from "../../auth"
import "./common.css"
const Instr = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const data = await Auth.onAuthStateChanged();
            await setUser(data)
            await console.log(user)
            axios.post("https://coviddata.vedvardhan.repl.co/volunteer/data", user)
            // .then()
        }
        fetchData()
    }, [])
    return(
        <div className="Instr" style={{textAlign: 'left'}}>
            <h1>Instructions for {user.displayName}</h1>
            <ul>
                <li>number 1</li>
                <li>number 2</li>
                <li>number 3</li>
                <li>number 4</li>
                <li>number 5</li>
            </ul>
            <p>Some rules</p>
            <ul>
                <li>More rules</li>
                <li>Another one</li>
                <li>Another one</li>
            </ul>
        </div>
    );
}
export default Instr