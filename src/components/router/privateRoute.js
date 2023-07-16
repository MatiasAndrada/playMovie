import { Navigate } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

export function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.auth.activo);
  return auth ? children : <Navigate to="/signIn" />;
}