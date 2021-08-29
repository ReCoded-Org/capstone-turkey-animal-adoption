import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button, Form } from "react-bootstrap";
import logo from "../../images/logo.png";
import Login from "../Login/Login";
import "./NavBar.css";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  //const [t , i18n] = useTranslation("navbar");
  const { t } = useTranslation();




  // const handleLanguageChange = (lang) => {
  //   i18next.changeLanguage(lang);
  // };


  return (
    <>
      <Navbar variant="light" expand="lg" className="bgLight">
        <Navbar.Brand>
          <NavLink to="/" exact>
            <img
              src={logo}
              height="50"
              alt="our Furry Friend"
              className="logoHeader"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/about" className="nav-link navLink">
            {t("navbar.headers.header0")}
            </NavLink>
            <NavLink to="/blog" className="nav-link navLink">
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-link navLink">
              Contact
            </NavLink>
            <NavLink to="/resources" className="nav-link navLink">
              Resources
            </NavLink>
          </Nav>
          <Button onClick={() => setShowSignUp(true)}>SignUp</Button>
          <Button onClick={() => setShowLogin(true)} className="ml-2">
            login
          </Button>
          <Form.Control as="select" className="w-auto language">
            <option onClick={() => {
                i18next.changeLanguage("en");
              }} value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option onClick={() => {
                i18next.changeLanguage("tr");
              }} value="Turkish">Turkish</option>
          </Form.Control>
        </Navbar.Collapse>
      </Navbar>
      <SignUpModal show={showSignUp} hideFn={setShowSignUp} />
      <Login show={showLogin} hideFn={setShowLogin} />
    </>
  );
}

export default NavBar;
