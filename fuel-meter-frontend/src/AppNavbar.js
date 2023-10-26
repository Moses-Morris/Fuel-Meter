import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Fuel Meter App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#fuel">Fuel</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);
}

export default AppNavbar;