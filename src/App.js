import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import "./styles/App.scss";

// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import MovieList from "./components/Movies/MovieList";
import MovieDetail from "./components/Movies/MovieDetail/MovieDetail";
import Mylist from "./components/MyList/Mylist";
import MyAccount from "./components/MyAccount/MyAccount";
import Contact from "./components/Contact/Contact";
import Login from "./components/Auth/Login";
import PRUEBA from "./firebase/firebase";
/* const stock = 10;
const initial = 1; */

function App() {
  return (
    <div>
      <NavBar />
    <PRUEBA />
      <Routes>
        <Route path="/list" element={<Mylist />}/>
        <Route path="/account" element={<Contact />}/>
        <Route path="/contact" element={<MyAccount />}/>
        <Route path="/auth" element={<Login />}/>
        <Route path="/" element={ <Home /> }/> 
      </Routes>
      <MovieList />
      <MovieDetail />
    </div>
  );
}
export default App;
