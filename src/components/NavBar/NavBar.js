import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./NavBar.scss";

function NavBar() {
  return (
    <Navbar variant="light" expand="lg">
      <Navbar.Brand href="/" exact="true">
        <img src={logo} height="50" alt="Furry Friend" className="logoHeader" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/completed">Blog</Nav.Link>
          <Nav.Link href="/completed">Contact</Nav.Link>
        </Nav>
        <Button>SignUp</Button>

        <Form.Control as="select" className="w-auto language">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
          <option value="Turkish">Turkish</option>
        </Form.Control>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
