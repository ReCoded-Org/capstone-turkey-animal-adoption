import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import SignUpModal from "../SignUpModal/SignUpModal";
import logo from "../../images/logo.png";
import "./NavBar.css";


function NavBar() {

  const [show, setShow] = useState(false);
  
  const openModal = () => setShow(!show)
    
  // const renderModal = () => { 
  //   if(show === "none") setShow("block")
  //   else setShow("none")

  // }    

      
    
  
  
  
  
  return (
    <div>
    <Navbar variant="light" expand="lg" className="bgLight">
      <Navbar.Brand>
        <NavLink to="/" exact>
          <img
            src={logo}
            height="50"
            alt="Furry Friend"
            className="logoHeader"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/about" className="nav-link navLink">
            About
          </NavLink>
          <NavLink to="/blog" className="nav-link navLink">
            Blog
          </NavLink>
          <NavLink to="/contact" className="nav-link navLink">
            Contact
          </NavLink>
        </Nav>
        <Button onClick={openModal}>SignUp</Button>
        <Form.Control as="select" className="w-auto language">
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
          <option value="Turkish">Turkish</option>
        </Form.Control>
      </Navbar.Collapse>
    </Navbar>
    <SignUpModal show={show} onHide={openModal}/>
    </div>
  );
}

export default NavBar