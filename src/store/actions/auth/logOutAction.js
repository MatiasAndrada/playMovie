import { auth } from "../../../firebase/config";
import { setUserLogOut, setUserError } from "../../slices/auth";


export const logOut = () => async (dispatch) =>{
    auth.signOut()
    .then(()=>{
        dispatch(setUserLogOut())
    })
    .catch((error)=>{
        dispatch(setUserError(error.code))
    })
}