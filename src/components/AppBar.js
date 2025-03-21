import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const AppBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <div>
          <ButtonGroup className="m-2 justify-content-end">
          <Button variant="success">Login</Button>
          </ButtonGroup>
          <ButtonGroup className="m-2 justify-content-end">
          <Button variant="success">Book Demo</Button>
          </ButtonGroup>
          </div>
          
      </Container>
    </Navbar>
    )
}
export default AppBar