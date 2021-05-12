import firebase from "firebase/app"
import "firebase/auth"
import * as dotenv from "dotenv";
import path from "path";
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

class Auth {
    constructor() {
        this.auth = false
    }

    login(cb, captchaELem) {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(async result => {
            if(!result.user.phoneNumber) {
                let phoneNumber = prompt("Provide your phone number");
                phoneNumber = "+91" + phoneNumber;
                // firebase.auth().settings.appVerificationDisabledForTesting = true;
                let appVerifier = await new firebase.auth.RecaptchaVerifier(
                    captchaELem, { size: 'invisible'}
                )
                
                return result.user.linkWithPhoneNumber(phoneNumber, appVerifier)
                .then(confirmationResult => {
                    var code = prompt("Provide your SMS code")
                    const confirm = confirmationResult.confirm(code).then(res => {
                        console.log("sucess")
                        this.auth = true
                        cb()
                    }).catch(err => {
                        alert(err.message)
                    })
                    return confirm
                }).catch(err => {
                    alert("Something went wrong. Please try again")
                    console.log(err)
                })
            }
            else {
                this.auth = true
            }
            // this.auth = true
        });
    }
    async onAuthStateChanged() {
        let userData = {}
        await firebase.auth().onAuthStateChanged(user => {
            if(user) {
                // Logged in
                console.log(user)
                let { displayName, email, uid, phoneNumber } = user
                userData = { uid, displayName, email, phoneNumber }
            }
        })
        return userData
    }
    getAuthStatus() {
        return this.auth
    }
    logout() {
        firebase.auth().signOut()
        this.auth = false
    }
}

export default new Auth()