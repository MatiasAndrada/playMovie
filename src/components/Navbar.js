import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import pushItems from './types/functional';

function callback (e){
    pushItems(e)
};
const Menu = _ => {
    return (
        <Navbar bg="dark" >
            <Container>
                <Navbar.Brand href="">
                    <img
                        src="/header.png"
                        width="120"
                        height="90"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
            <Nav onSelect={callback}>
                <NavDropdown title="Desayuno" id="nav-dropdown">
                    <NavDropdown.Item eventKey="coffee">Cafe</NavDropdown.Item>
                    <NavDropdown.Item eventKey="jugos">Jugos</NavDropdown.Item>
                    <NavDropdown.Item eventKey="comidaB">Comida</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Almuerzo" id="nav-dropdown">
                    <NavDropdown.Item eventKey="pizza">Pizza</NavDropdown.Item>
                    <NavDropdown.Item eventKey="beer">Cerveza</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Merienda" id="nav-dropdown">
                    <NavDropdown.Item eventKey="coffee">Cafes</NavDropdown.Item>
                    <NavDropdown.Item eventKey="jugos">Jugos</NavDropdown.Item>
                    <NavDropdown.Item eventKey="comidaB">Comida</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cena" id="nav-dropdown">
                    <NavDropdown.Item eventKey="comidaD">Comida</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Vino</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
};
export default Menu;