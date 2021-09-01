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

  const { t } = useTranslation();

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
              {t("navbar.headers.header1")}
            </NavLink>
            <NavLink to="/contact" className="nav-link navLink">
              {t("navbar.headers.header2")}
            </NavLink>
            <NavLink to="/resources" className="nav-link navLink">
              {t("navbar.headers.header3")}
            </NavLink>
          </Nav>
          <Button onClick={() => setShowSignUp(true)}>{t("navbar.button.button0")}</Button>
          <Button onClick={() => setShowLogin(true)} className="ml-2">
            {t("navbar.button.button1")}
          </Button>
          <Form.Control onChange={(e) => {
            i18next.changeLanguage(e.target.value);
          }} as="select" className="w-auto language">
            <option value="en">{t("navbar.languages.lang0")}</option>
            <option value="tr">{t("navbar.languages.lang1")}</option>
          </Form.Control>
        </Navbar.Collapse>
      </Navbar>
      <SignUpModal show={showSignUp} hideFn={setShowSignUp} />
      <Login show={showLogin} hideFn={setShowLogin} />
    </>
  );
}

export default NavBar;
