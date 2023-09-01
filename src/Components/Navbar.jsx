import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar , Container, Nav , NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const HeadNavbar = () => {
  return (
    <div>
     <Navbar expand="lg" className="gradient">
        <Navbar.Brand as={Link} to={"/"} className='ms-3'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-5">
            <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link as={Link} to={"./contact"} className='mx-4'> Contact </Nav.Link>
            <Nav.Link as={Link} to={"./product"} > Products </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default HeadNavbar;