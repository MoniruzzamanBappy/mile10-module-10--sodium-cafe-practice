import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo2 from "../../images/logo2.png"
import { BsCart2 } from 'react-icons/bs';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/home'>
            <img className="img-fluid" src={logo2} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">
              <BsCart2/>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} className="signup-btn rounded" eventKey={2} to='/signup'>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
