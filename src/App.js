import React from "react";

// router
import { Route, Routes } from "react-router-dom";
// styles
import "./styles/App.scss";
// router
import { PrivateRoute } from "./components/router/privateRoute";
// components
import NavBar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import MovieTrending from "./components/movies/movieList/moviesTrending/MoviesTrending.jsx";
import MovieListActors from "./components/movies/movieList/movieListActors/MovieListActors.jsx";
import MoviesSearch from "./components/movies/movieList/moviesSearch/MoviesSearch.jsx";
import SignIn from "./components/auth/signIn/SignIn.jsx";
import SignUp from "./components/auth/signUp/SignUp.jsx";

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
