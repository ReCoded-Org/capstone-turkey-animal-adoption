import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Form, Dropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import Login from "../Login/Login";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { logout, checkLogined } from "../../helpers/auth";
import { LOG_OUT, SIGN_IN } from "../../store/actions/actionConst";
import SignUpModal from "../SignUpModal/SignUpModal";
import { db, app } from "../../firebase";

function NavBar() {
  const user = useSelector((state) => state.user);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const logoutAuth = async () => {
    try {
      await logout();
      dispatch({ type: LOG_OUT });
    } catch (error) {
      console.log(error);
    }
  };
  const goToProfile = () => {
    history.push("/profile");
  };

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection("profile")
          .where("uid", "==", user.uid)
          .limit(1)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              dispatch({ type: SIGN_IN, payload: doc.data() });
              setLoading(true);
            });
          })
          .catch((error) => {
            console.log("Error getting cached document:", error);
          });
      } else {
        dispatch({ type: LOG_OUT });
        setLoading(true);
      }
    });
  }, []);

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
            <NavLink to="/resources" className="nav-link navLink">
              Resources
            </NavLink>
          </Nav>
          {!user && loading && (
            <div>
              <Button onClick={() => setShowSignUp(true)}>SignUp</Button>
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
      <SignUpModal show={showSignUp} hideModule={setShowSignUp} />
      <Login show={showLogin} hideModule={setShowLogin} />
    </>
  );
}

export default NavBar;
