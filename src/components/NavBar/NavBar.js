import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Form, Dropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import Login from "../Login/Login";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../helpers/auth";
import { LOG_OUT } from "../../store/actions/actionConst";

function NavBar() {
  const user = useSelector(state => state.user);
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();

  const logoutAuth = () => {
    try {
      logout();
      dispatch({ type: LOG_OUT });
    } catch (error) {
      console.log(error);
    }
  };
  const goToProfile = () => {
    history.push("/profile");
  };

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
              About
            </NavLink>
            <NavLink to="/blog" className="nav-link navLink">
              Blog
            </NavLink>
            <NavLink to="/contact" className="nav-link navLink">
              Contact
            </NavLink>
          </Nav>
          {!user && (
            <div>
              <Button>SignUp</Button>
              <Button onClick={() => setShowLogin(true)} className="ml-2">
                login
              </Button>
            </div>
          )}
          <Form.Control as="select" className="w-auto language">
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Turkish">Turkish</option>
          </Form.Control>
          {user && (
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="language">
                {user.name}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={goToProfile}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={logoutAuth}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Navbar.Collapse>
      </Navbar>
      <Login show={showLogin} hideFn={setShowLogin} />
    </>
  );
}

export default NavBar;
