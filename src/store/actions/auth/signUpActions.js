import { auth } from "../../../firebase/config";
//firebase
import {
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
//redux
import { loading, setUserError, setUserSuccess } from "../../slices/auth";

export const signUp = (email, password) => async (dispatch) => {
  dispatch(loading(true));
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      setPersistence(auth, browserSessionPersistence);
      console.log("🦇 ~ file: signUpActions.js ~ line 14 ~ signUp ~ res", res);
      const userCurrent = {
        email: res.user.email,
        uid: res.user.uid,
      };
      dispatch(setUserSuccess(userCurrent));
    })
    .catch((error) => {
      const errorCode = error.code;
      dispatch(setUserError(errorCode));
    });
};

/* export const useAuth = () => {}; */
