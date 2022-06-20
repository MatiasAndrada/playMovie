import React, { useState } from "react";
// react-bootstrap
import { Dropdown, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
// redux
import store from "../../store";
import { useDispatch } from "react-redux";
import { setUserLogOut } from "../../store/slices/auth";
import { readFavoriteMovie } from "../../store/actions/firestore/readFavoriteMovie";
import { isLogged } from "../../store/actions/auth/isLogged";
// firebase
import { fileDownload } from "../../firebase/fileDowload";
import { auth } from "../../firebase/config";
import Search from "./Search";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    activo: false,
    error: "",
    loading: false,
    user: {
      email: "",
      uid: "",
    },
  });
  store.subscribe(updateData);
  function updateData() {
    setState(store.getState().authSlice);
    const stateUser= isLogged()
    if (stateUser === true) {
      setImg("account-icon", "img/icons/user-accepted.png");
    } 
  }


  function logOut() {
    console.log("logOut");
    try {
      auth.signOut();
      dispatch(setUserLogOut(false));
    } catch {
      console.log("catch logOut");
    }
  }
  function iniciarSesion() {
    navigate("/public/signIn");/*  */
  }
  function crearUsuario() {
    navigate("/public/register");
  }
  function readListfavorite(){
    readFavoriteMovie(state.user.id)
  }
  function setImg(imgID, url) {
    fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((error) => {
        console.log(error)
      });
  }
  setImg("header-img", "img/icons/Header.png");
  setImg("account-icon", "img/icons/SignIn.png");
  setImg("favorite-list-icon", "img/icons/favorite-list.png");
  return (
    <div className="cover-space">
      <Navbar className="container__navbar ">
        <Navbar.Brand>
          <div onClick={() => navigate("/")}>
          <img
            src=""
            width="150"
            height="auto"
            className="mr-4"
            alt="React Bootstrap logo"
            id="header-img"
          />
          </div>
        </Navbar.Brand>
        <Search />
        <Dropdown className="dropdownfavoriteList">
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img
              id="favorite-list-icon"
              src=""
              alt="icon favorite list"
              className="favoriteListIcon"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropDownMenu">
            <Dropdown.Item onClick={readListfavorite} className="dropDownItem">
              Read firebase
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        
        <Dropdown className="dropdownAccount">
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img
              id="account-icon"
              src=""
              alt="icon account"
              className="accountIcon"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropDownMenu">
            {/* {state.activo && */}{" "}
            <Dropdown.Item onClick={logOut} className="dropdownItem">
              Log Out
            </Dropdown.Item>
            <Dropdown.Item onClick={iniciarSesion} className="dropdownItem">
              Iniciar Sesion
            </Dropdown.Item>
            <Dropdown.Item onClick={crearUsuario} className="dropdownItem">
              Crear Usuario
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
};
export default NavBar;
