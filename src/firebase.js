import firebase from "firebase"
import "firebase/auth"
import * as dotenv from "dotenv"
import path from "path"
dotenv.config({ path: path.join(__dirname,'../.env') });

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "cfa-coviddata.firebaseapp.com",
    projectId: "cfa-coviddata",
    storageBucket: "cfa-coviddata.appspot.com",
    messagingSenderId: "541721075264",
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
})
export default firebase