import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import "./styles/App.scss";
// router
import { PublicRouter } from "./components/Router/fn/publicRouter"
import { PrivateRouter } from "./components/Router/fn/privateRouter"
import { PublicRoutes } from "./components/Router/routes/PublicRoutes"
import { PrivateRoutes } from "./components/Router/routes/PrivateRoutes"
// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieDetail from "./components/Movies/MovieDetail/MovieDetail";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
        path="/public/"
          element={
            <PublicRouter>                
              <PublicRoutes/>
            </PublicRouter>
          }
        />
        <Route
        path="/user/"
          element={
            <PrivateRouter>
             <PrivateRoutes/>
            </PrivateRouter>
          }
        />
      </Routes>
      <MovieDetail />
    </div>
  );
}
export default App;
