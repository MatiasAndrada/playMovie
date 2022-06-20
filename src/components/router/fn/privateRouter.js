import { isLogged } from "../../../store/actions/auth/isLogged";
import { Navigate } from "react-router-dom";


export const PrivateRouter = ({children}) => {
  const userState = isLogged()
  
  return (
    <>
    {
    (userState === true)? <Navigate to="/home"/> : <Navigate to="/public/signIn"/> 
    }
    {isLogged ? children : <Navigate to="/signIn"/>}
    </>
  )
};


