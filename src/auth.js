import firebase from "./firebase"
import * as dotenv from "dotenv";
import axios from "axios"
import path from "path";


class Auth {
    constructor() {
        this.auth = false;
        this.otpData = {}
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

    confirmOtp = (phoneNumber, code, cb, errorCb) => {
        this.otpData.confirm(code)
            .then(async res => {
                  const { user } = res;
                  const { uid } = user;
                  this.auth = true
                  let name = "";
                  await axios.post("https://codingforall-coviddata.herokuapp.com/volunteer/name/verify", { uid })
                  .then(res => {
                      console.log(res.data, "what?")
                      if(res.data == "No Name" || res.data == "") {
                          name = prompt("Enter your Name")
                      }
                  })
                  await console.log(name)
                  await axios.post("https://codingforall-coviddata.herokuapp.com/volunteer/data", {
                      displayName: name,
                      phoneNumber,
                      uid
                  }).then(res => {
                      console.log(res.data)
                      cb()
                  }).catch(err => alert(err.message))
                  console.log(user)
            })
            .catch(err => {
                alert(err.message)
                errorCb()
            })
    }
    loginWithPhone = async (phoneNumber) => {
        if(phoneNumber) {
            const appVerifier = window.recaptchaVerifier;
            const res = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)          
            this.otpData = res
            // .then(confirmResult => {
            //   // success
            //   const code = otp
            //   confirmResult.confirm(code)
            //   .then(async res => {
            //       const { user } = res;
            //       const { uid } = user;
            //       this.auth = true
            //       let name = "";
            //       await axios.post("https://coviddata.vedvardhan.repl.co/volunteer/name/verify", { uid })
            //       .then(res => {
            //           console.log(res.data, "what?")
            //           if(res.data == "No Name" || res.data == "") {
            //               name = prompt("Enter your Name")
            //           }
            //       })
            //       await console.log(name)
            //       await axios.post("https://coviddata.vedvardhan.repl.co/volunteer/data", {
            //           displayName: name,
            //           phoneNumber,
            //           uid
            //       }).then(res => {
            //           console.log(res.data)
            //           cb()
            //       }).catch(err => alert(err.message))
            //       console.log(user)
            //     })
            //   .catch(err => {
            //       err()
            //       alert(err.message)
            //     })
            // })
            // .catch(error => {
            //   // error
            //   err()
            //   alert(error.message)
            // });
        } else alert("Try Again")
    }
}

export default new Auth()