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
          <Nav className="me-auto ms-5">
            <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link as={Link} to={"./contact"} className='mx-3'> Contact </Nav.Link>
            <NavDropdown  title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={"./product"} > Eye Makeup </NavDropdown.Item>
              <NavDropdown.Item > Foundations </NavDropdown.Item>
              <NavDropdown.Item > Face Powder </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item > Emelie Cosmetics </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default HeadNavbar;