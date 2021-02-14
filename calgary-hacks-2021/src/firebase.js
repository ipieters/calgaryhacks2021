import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyB15TzgS8fxMnOWPcIfKa42fEBPk-Oellw",
    authDomain: "hacks-27126.firebaseapp.com",
    projectId: "hacks-27126",
    storageBucket: "hacks-27126.appspot.com",
    messagingSenderId: "1010791646016",
    appId: "1:1010791646016:web:2ea9a63027c515c46ff0a5", 
})

export const auth = app.auth()
export default app