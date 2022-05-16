import { auth } from "../../../firebase/config";
import { setUserError, setUserLogOut } from "../../slices/auth";

export const logOutActions = () => (dispatch) => {
  console.log("fn");
  try {
    auth.signOut();
    dispatch(setUserLogOut);
  } catch (err) {
    console.log(err);
    dispatch(setUserError(err));
  }
};
