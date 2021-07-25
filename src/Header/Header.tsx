import React from 'react';
import './header.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import HeaderLogo from './image/HeaderLogo.png';

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="header"
              src={HeaderLogo}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#features" className="text-white">About Me</Nav.Link>
            <Nav.Link href="#pricing" className="text-white">My Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}