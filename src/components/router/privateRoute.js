import store from "../../store";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const auth = store.getState().authSlice.activo;
  return auth ? children : <Navigate to="/signIn" />;
}