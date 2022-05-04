import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import "./styles/App.scss";
// Firebase

// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieList from "./components/Movies/MovieList/MovieList";
import MovieDetail from "./components/Movies/MovieDetail/MovieDetail";
import Mylist from "./components/MyList/Mylist";
//import MyAccount from "./components/MyAccount/MyAccount";
import Contact from "./components/Contact/Contact";
import Login from "./components/Auth/Login/Login";
import SignIn from "./components/Auth/SignIn/SignIn";

/* const stock = 10;
const initial = 1; */

function App() {

   return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<SignIn />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Account" element={<Contact />} />
        <Route path="/List" element={<Mylist />} />
        <Route path="/movieList" element={<MovieList />} />
      </Routes>
      <MovieDetail />
    </div>
  );
}
export default App;
