import { auth } from "../../../firebase/config";
import { createFavoriteMovie } from "../movies/favoritesMovies"
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
      const userCurrent = {
        email: res.user.email,
        uid: res.user.uid,
      };
      dispatch(setUserSuccess(userCurrent));
      createFavoriteMovie()
    })
    .catch((error) => {
      dispatch(setUserError(error.code));
    });
};


