import React from "react";
import { fileDownload } from "../../firebase/fileDowload";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";




const NavBar = (props) => {

  const getFile = fileDownload('img/icons/Header.png')
  getFile
  .then((res) => {
    const img = document.getElementById("header-img")
    img.src = res;
  })
  .catch((err) => console.log(err));

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
      <Nav
        className="nav_dropdown align-items-end"
      >
          <NavDropdown title="My List" id="nav-dropdown">
            <NavDropdown.Item eventKey="coffee">Cafe</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Account" id="nav-dropdown">
            <NavDropdown.Item>
              <button 
              className="btn"
              >
                log out
              </button>
            </NavDropdown.Item>
          </NavDropdown>
      </Nav>
    </Navbar>
    

    </div>
  );
};
export default NavBar;
