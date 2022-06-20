import { isLogged } from "../../../store/actions/auth/isLogged";
import { Navigate } from "react-router-dom";

export const PublicRouter = ({children}) => {
  const userState = isLogged()  
  return userState ? <Navigate  to="/public/signIn" />  : children
};



