import { auth } from "../../../firebase/config";
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence  } from "firebase/auth";
import { setUserSuccess, setUserError, loading } from "../../slices/auth";


export const signIn = (email, password) => async (dispatch) =>{
  dispatch(loading(true)) 
  try {
    setPersistence(auth, browserSessionPersistence)
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
