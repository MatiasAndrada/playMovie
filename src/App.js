import React from "react";
import { Route, Routes } from "react-router-dom";

// styles
import "./styles/App.scss";
// router
import { PrivateRoute } from "./components/router/privateRoute";
// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieList from "./components/Movies/MovieList/MovieList";
/* import MovieDetail from "./components/Movies/MovieDetail/MovieDetail" */
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
/* import Contact from "./components/Contact/Contact"
import MyAccount from "./components/MyAccount/MyAccount" */

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/movieList"
          element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
