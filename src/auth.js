import firebase from "firebase"
import "firebase/auth"
firebase.initializeApp({
    apiKey: "AIzaSyA_xtriBFdT2gewhLt1j_XKftSqcoiuJJs",
    authDomain: "cfa-coviddata.firebaseapp.com",
    projectId: "cfa-coviddata",
    storageBucket: "cfa-coviddata.appspot.com",
    messagingSenderId: "541721075264",
    appId: "1:541721075264:web:1dcc8318cbfe3a5c5cc9a5",
    measurementId: "G-E7Q82H61V2"
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
                phoneNumber = "+91" + phoneNumber
                let appVerifier = await new firebase.auth.RecaptchaVerifier(
                    captchaELem, { size: 'invisible'}
                )
                return result.user.linkWithPhoneNumber(phoneNumber, appVerifier)
                .then(confirmationResult => {
                    var code = prompt("Provide your SMS code")
                    const confirm = confirmationResult.confirm(code)
                    this.auth = true
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
            cb()
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