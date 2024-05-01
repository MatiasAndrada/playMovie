import React from "react";

// router
import { Route, Routes } from "react-router-dom";
// styles
import "./styles/App.scss";
// router
import { PrivateRoute } from "./components/router/privateRoute";
// components
import NavBar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import MovieTrending from "./components/movies/movieList/moviesTrending/MoviesTrending";
import MovieListActors from "./components/movies/movieList/movieListActors/MovieListActors";
import MoviesSearch from "./components/movies/movieList/moviesSearch/MoviesSearch";
import SignIn from "./components/auth/signIn/SignIn";
import SignUp from "./components/auth/signUp/SignUp";

//TODO
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
