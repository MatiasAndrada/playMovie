/* import React from 'react'
import { Route, Navigate} from "react-router-dom"
import { useAuth } from '../store/actions/authActions'



const PrivateRoute = ({component: Component, ...rest}) => {
    const {currentUser} = useAuth()
  return (
    <Route
        {...rest}
        render={props =>{
            return currentUser ? <Component {...props} /> : <Navigate replace to="/home" />
        }}
    >

    </Route>
  )
}
 
export default PrivateRoute */