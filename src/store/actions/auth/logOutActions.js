/* import { auth } from "../../../firebase/config";
import { setUserLogOut } from "../../slices/auth";
import { Dispatch } from "@reduxjs/toolkit";


export function logOut(){
    auth().signOut()
    .then(()=>{
        console.log('Saliendo...')
        Dispatch(setUserLogOut(false))
    })
    .catch((error)=>{
        console.log(error)
    })
} */