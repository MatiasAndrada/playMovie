import React from "react";


// router
import { Route, Routes } from "react-router-dom";
// styles
import "./styles/App.scss";
// router
import { PrivateRoute } from "./components/router/privateRoute";
// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import MovieTrending from "./components/Movies/MovieList/MoviesTrending/MoviesTrending";
import MovieListActors from "./components/Movies/MovieList/MovieListActors/MovieListActors";
import MoviesSearch from "./components/Movies/MovieList/MoviesSearch/MoviesSearch";
import SignIn from "./components/Auth/SignIn/SignIn";
import SignUp from "./components/Auth/SignUp/SignUp";

/* import MyAccount from "./components/MyAccount/MyAccount"  */


function App() {
  return (
    <div className="app-container">
      <Navbar />

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
          <Route path="/searchByActor/:id" element={<MovieListActors />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/movieList"
            element={
              <PrivateRoute>
                <MoviesSearch />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}


export default App;
