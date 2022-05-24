import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setUserSuccess, setUserError, loading } from "../../slices/auth";


export const login = (email, password) => async (dispatch) =>{
  console.log("0");
  dispatch(loading(true)) 
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const userCurrent = {
        email: res.user.email,
        uid: res.user.uid,
    }
    dispatch(
      setUserSuccess(userCurrent)
    )
  } catch (err) {
      dispatch(
    setUserError(err.code))
    console.log(err.code);
  }
}
