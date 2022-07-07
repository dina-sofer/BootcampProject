import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header: React.FC = () => {

  return (
    <Navbar style={{height: '70px'}} bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/Home">Muffins Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/About">About Us</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;