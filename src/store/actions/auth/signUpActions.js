import { auth } from "../../../firebase/config";
import { createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { loading, setUserError, setUserSuccess } from "../../slices/auth";

export const signUp = (email, password) => async (dispatch) =>{
  dispatch(loading(true))
    try{
      setPersistence(auth, browserSessionPersistence)
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const userCurrent = {
        email: res.user.email,
        uid: res.user.uid,
    }
    dispatch(
      setUserSuccess(userCurrent)
    )
    } catch(err) {
      dispatch(
      setUserError(err.code))
    };
};


/* export const useAuth = () => {}; */
