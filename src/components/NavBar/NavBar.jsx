import React from "react";
import Search from "./Search";
import FavoriteList from "../Favorite/favoriteList";
import { Dropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// redux
import store from "../../store";
import { useDispatch } from "react-redux";
import { setUserLogOut } from "../../store/slices/auth";
import { readFavoriteMovie } from "../../store/actions/firestore/readFavoriteMovie";
// firebase
import { fileDownload } from "../../firebase/fileDowload";
import { auth } from "../../firebase/config";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stateUser = store.getState().authSlice.activo;
  if (stateUser === true) {
    setImg("account-icon", "img/icons/user-accepted.png");
  }

  function logOut() {
    auth
      .signOut()
      .then(() => {
        console.log("Saliendo...");
        dispatch(setUserLogOut(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function readListfav() {
      dispatch(readFavoriteMovie());
  }
  async function setImg(imgID, url) {
    await fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setImg("header-img", "img/icons/Header.png");
  setImg("account-icon", "img/icons/SignIn.png");
  setImg("favorite-list-icon", "img/icons/favorite-list.png");
  return (
      <Navbar className="container__navbar ">
        <Navbar.Brand>
          <div onClick={() => navigate("/", { replace: true })}>
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
        {stateUser === true && (
          <Dropdown className="dropdownfavoriteList" drop={"start"}>
            <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
              <img
                id="favorite-list-icon"
                src=""
                alt="icon favorite list"
                className="favoriteListIcon"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropDownMenu" flip={true} variant={"dark"}>
              <Dropdown.Item
                className="dropDownItem"
                onClick={readListfav}
              >
                Actualizar
              </Dropdown.Item>
              <Dropdown.Item className="dropDownItem">
                <FavoriteList />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
        <Dropdown className="dropdownAccount">
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img
              id="account-icon"
              src=""
              alt="icon account"
              className="accountIcon"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropDownMenuAccount" flip={true} align={"end"} variant={"dark"}>
            {stateUser === true && (
              <Dropdown.Item onClick={logOut} className="dropdownItem">
                Log Out
              </Dropdown.Item>
            )}
            <Dropdown.Item
              onClick={() => {
                navigate("/signIn", { replace: true });
              }}
              className="dropdownItem"
            >
              Iniciar Sesion
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                navigate("/signUp", { replace: true });
              }}
              className="dropdownItem"
            >
              Crear Usuario
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
  );
};
export default NavBar;
