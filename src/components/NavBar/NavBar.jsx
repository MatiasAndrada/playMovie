import React, { useState } from "react";
// react-bootstrap
import { Dropdown, Navbar } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
// redux
import store from "../../store";
import { fileDownload } from "../../firebase/fileDowload";
import { auth } from "../../firebase/config";
/* import { logOutActions } from "../../store/actions/auth/logOutActions"; */
import { stateUser } from "../../store/actions/auth/stateUserAction";
import Search from "./Search";

const NavBar = () => {
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
  console.log("🚀 ~ file: NavBar.jsx ~ line 15 ~ NavBar ~ state", state)
  store.subscribe(updateData);
  function updateData() {
    setState(store.getState().authSlice);
    if(!state.activo) {
      setImg("account-icon", "img/icons/user-accepted.png")
    }else{

    }
  }
  
  function stateUserFN(){
    stateUser()
  } 
  function logOut() {
    auth.signOut()
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
        <Dropdown className="dropdown">
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img
              id="account-icon"
              src=""
              alt="icon account"
              className="accountImg"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropDownMenu">
            {/* {state.activo && */} <Dropdown.Item onClick={logOut} className="dropDownItem">
              Log Out
            </Dropdown.Item>
            <Dropdown.Item onClick={iniciarSesion} className="dropDownItem">
              Iniciar Sesion
            </Dropdown.Item>
            <Dropdown.Item onClick={crearUsuario} className="dropDownItem">
              Crear Usuario
            </Dropdown.Item>
             <Dropdown.Item onClick={stateUserFN} className="dropDownItem">
              ESTADO
            </Dropdown.Item>  
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
};
export default NavBar;
