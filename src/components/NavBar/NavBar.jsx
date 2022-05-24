import React, { useState } from "react";
// react-bootstrap
import { Dropdown, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
// redux
import store from "../../store";
import { useDispatch } from "react-redux";
import { stateUser } from "../../store/actions/auth/stateUserAction";
import { setUserLogOut } from "../../store/slices/auth";
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
  console.log("🚀 ~ file: NavBar.jsx ~ line 15 ~ NavBar ~ state", state);
  store.subscribe(updateData);
  function updateData() {
    setState(store.getState().authSlice);
    if (!state.activo) {
      setImg("account-icon", "img/icons/user-accepted.png");
    } else {
    }
  }

  function stateUserFN() {
    stateUser();
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
    navigate("/Login");
  }
  function crearUsuario() {
    navigate("/Register");
  }
  function setImg(imgID, url) {
    fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  setImg("header-img", "img/icons/Header.png");
  setImg("account-icon", "img/icons/Login.png");
  setImg("favourite-list-icon", "img/icons/favourite-list.png");
  return (
    <div className="cover-space">
      <Navbar className="container__navbar ">
        <Navbar.Brand href="/">
          <img
            src=""
            width="150"
            height="auto"
            className="mr-4"
            alt="React Bootstrap logo"
            id="header-img"
          />
        </Navbar.Brand>
        <Search />
        <Dropdown className="dropdownFavouriteList">
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img
              id="favourite-list-icon"
              src=""
              alt="icon favourite list"
              className="favouriteListIcon"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropDownMenu">
            <Dropdown.Item onClick={stateUserFN} className="dropDownItem">
              ESTADO
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
            <Dropdown.Item onClick={stateUserFN} className="dropdownItem">
              ESTADO
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
};
export default NavBar;
