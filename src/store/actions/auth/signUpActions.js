import { auth } from "../../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { loading, setUserError, setUserSuccess } from "../../slices/auth";

export const signUp = (email, password) => async (dispatch) =>{
  console.log("0")
  dispatch(loading(true))
    try{
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
