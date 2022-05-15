import React from "react";
// react-bootstrap
import { Dropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import { fileDownload } from "../../firebase/fileDowload";
import { logOut } from "../../store/actions/auth/logOut";
import Search from "./Search";


const NavBar = () => {
  
  function handleClick () {
    logOut()
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
        <Navbar.Brand href="">
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
            <Dropdown.Item onClick={handleClick} className="dropDownItem">
                Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </Navbar>
    </div>
  );
};
export default NavBar;
