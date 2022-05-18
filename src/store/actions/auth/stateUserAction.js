import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/config";

export const stateUser = () =>{ 
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("ESTADO")
    const data = user;
    console.log("🚀 ~ file: stateUserAction.js ~ line 11 ~ onAuthStateChanged ~ data", data)
    const uid = user.uid;
    console.log("🚀 ~ file: stateUserAction.js ~ line 13 ~ onAuthStateChanged ~ uid", uid)
    // ...
  } else {
    // User is signed out
    console.log("no hay user OK")
  }
})
} 