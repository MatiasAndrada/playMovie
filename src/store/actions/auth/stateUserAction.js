import { onAuthStateChanged } from "firebase/auth";
import store from "../..";
import { auth } from "../../../firebase/config";

export const stateUser = () =>{ 
    onAuthStateChanged(auth, (user) => {
      console.log("0")
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("yes user")
    const data = user;
    console.log("🚀 ~ file: stateUserAction.js ~ line 11 ~ onAuthStateChanged ~ data", data)
    const uid = user.uid;
    console.log("🚀 ~ file: stateUserAction.js ~ line 13 ~ onAuthStateChanged ~ uid", uid)
    console.log("estado de la store")
    console.log(store.getState().authSlice)
    // ...
  } else {
    // User is signed out
    console.log("no user")
    console.log("estado de la store")
    console.log(store.getState().authSlice)
  }
})
} 