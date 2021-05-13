import firebase from "firebase/app"
import "firebase/auth"
import * as dotenv from "dotenv";
import axios from "axios"
import path from "path";
dotenv.config({ path: path.join(__dirname,'../.env') });

// firebase.initializeApp({
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: "cfa-coviddata.firebaseapp.com",
//     projectId: "cfa-coviddata",
//     storageBucket: "cfa-coviddata.appspot.com",
//     messagingSenderId: "541721075264",
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
// })

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
                    alert(err.message)
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


    loginWithPhone = (phoneNumber, cb) => {
        if(phoneNumber) {
            const appVerifier = window.recaptchaVerifier;
            firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(confirmResult => {
              // success
              const code = prompt("Enter code")
              confirmResult.confirm(code)
              .then(async res => {
                  const { user } = res;
                  const { uid } = user;
                  this.auth = true
                  let name;
                  await axios.post("https://coviddata.vedvardhan.repl.co/volunteer/name/verify", { uid })
                  .then(res => {
                      if(res.data == "NO NAME") {
                          name = prompt("Enter your Name")
                      }
                  })
                  await axios.post("https://coviddata.vedvardhan.repl.co/volunteer/data", {
                      name,
                      phoneNumber,
                      uid
                  }).then(res => {
                      console.log(res.data)
                      cb()
                  }).catch(err => alert(err.message))
                  console.log(user)
              }).catch(err => alert(err.message))
            })
            .catch(error => {
              // error
              console.log({error})
            });
        } else alert("All fields are necessary")
    }
}

export default new Auth()