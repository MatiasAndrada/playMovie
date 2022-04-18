import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Search from "./Search";

function callback(eventKey) {
  console.log(eventKey);
}

const NavBar = () => {
  return (
    <Navbar className="container__navbar d-flex justify-content-between align-items-center">
      <Navbar.Brand href="">
        <img
          src="/header.png"
          width="150"
          height="auto"
          className="mr-4"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Search />
      <Nav
        className="nav_dropdown align-items-end"
        onSelect={callback}
      >
          <NavDropdown title="My List" id="nav-dropdown">
            <NavDropdown.Item eventKey="coffee">Cafe</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Account" id="nav-dropdown">
            <NavDropdown.Item eventKey="pizza">Pizza</NavDropdown.Item>
          </NavDropdown>
      </Nav>
    </Navbar>
  );
};
export default NavBar;
