import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../Auth/SignIn/SignIn'
import SignUp from '../../Auth/SignUp/SignUp'
import Contact from '../../Contact/Contact'

export const PublicRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/signIn' element={<SignIn/>}  />
            <Route path='/signUp' element={<SignUp/>}  />
            <Route path='/contact' element={<Contact/>}  />
        </Routes>
    </div>
  )
}

