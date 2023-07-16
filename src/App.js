import React from "react";

// router
import { Route, Routes } from "react-router-dom";
// styles
import "./styles/App.scss";
// router
import { PrivateRoute } from "./components/router/privateRoute";
// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieTrending from "./components/Movies/MoviesTrending/MoviesTrending";
import { MovieList } from "./components/Movies/MovieList/MovieList";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";
/* import MyAccount from "./components/MyAccount/MyAccount"  */

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <MovieTrending />
              </>
            }
          />
          <Route path="/signIn" element={<SignIn />} />
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
    </div>
  );
}

export default App;
