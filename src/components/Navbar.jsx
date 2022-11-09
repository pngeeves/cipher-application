import React from 'react'
import {LinkContainer} from 'react-router-bootstrap' 
import './Navbar.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComp() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{fontFamily:"'Gelasio', serif",  zIndex: "500"}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cesarshift">
              <Nav.Link>Cesar Shift</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/polybius">
              <Nav.Link>Polybius Square</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/substitution">
              <Nav.Link>Substitution</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}



