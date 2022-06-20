import { auth } from "../../../firebase/config";
/* import { setUserSuccess, setUserError } from "../../slices/auth"; */
  
export function isLogged() {
  let active = false
  const user = auth.currentUser;

  if (user !== null) {
    active = true
  }
    else{
     active=false
   }
   return (active)
 } 

