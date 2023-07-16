import React from "react";
import Search from "./Search";
import { FavoriteList } from "../Favorite/favoriteList";
import { Dropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/actions/auth/logOutAction";
// firebase
import { fileDownload } from "../../firebase/fileDownload";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stateUser = useSelector((state) => state.auth.activo);

  function logOutUser() {
    dispatch(logOut());
  }
  async function setImg(imgID, url) {
    await fileDownload(url)
      .then((res) => {
        const img = document.getElementById(imgID);
        img.src = res;
      })
      .catch((err) => {
        if (err.name !== "TypeError") {
          console.log(err);
        }
      });
  }
  if (stateUser === true) {
    setImg("account-icon", "img/icons/user-accepted.png");
    setImg("favorite-list-icon", "img/icons/favorite-list.png");
  } else {
    setImg("account-icon", "img/icons/SignIn.png");
  }
  setImg("header-img", "img/icons/Header.png");

  return (
    <Navbar className="container__navbar ">
      <Navbar.Brand>
        <div onClick={() => navigate("/", { replace: true })}>
          <img
            src=""
            className="navbar__logo"
            alt="React Bootstrap logo"
            id="header-img"
          />
        </div>
      </Navbar.Brand>
      <Search />
      {stateUser === true && (
        <Dropdown className="dropdownFavoriteList" drop={"start"}>
          <Dropdown.Toggle id="dropdown-basic" className="dropdownToggle">
            <img
              id="favorite-list-icon"
              src=""
              alt="icon favorite list"
              className="favoriteListIcon"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropDownMenu" flip={true} >
            <div className="dropDownItem">
              <FavoriteList />
            </div>
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

        <Dropdown.Menu
          className="dropDownMenuAccount"
          flip={true}
          align={"end"}
          variant={"dark"}
        >
          {stateUser ? (
            <Dropdown.Item onClick={logOutUser} className="dropdownItem">
              Log Out
            </Dropdown.Item>
          ) : (
            <>
              {" "}
              <Dropdown.Item
                onClick={() => {
                  navigate("/signIn", { replace: true });
                }}
                className="dropdownItem"
              >
                Iniciar Sesión
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  navigate("/signUp", { replace: true });
                }}
                className="dropdownItem"
              >
                Crear Usuario
              </Dropdown.Item>
            </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};
export default NavBar;
