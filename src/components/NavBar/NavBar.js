import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Navbar, Nav, Button, Form, Dropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import Login from "../Login/Login";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../helpers/auth";
import { LOG_OUT, SIGN_IN } from "../../store/actions/actionConst";
import SignUpModal from "../SignUpModal/SignUpModal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { db, app } from "../../firebase";

function NavBar() {
  const user = useSelector((state) => state.user);
  const [LoginShown, isLoginShown] = useState(false);
  const [signupShown, isSignupShown] = useState(false);
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
          {!user && loading && (
            <div>
              <Button onClick={() => isSignupShown(true)}>{t("navbar.button.button0")}</Button>
              <Button onClick={() => isLoginShown(true)} className="ml-2">
                {t("navbar.button.button1")}
              </Button>
            </div>
          )}
          <Form.Control onChange={(e) => {
            i18next.changeLanguage(e.target.value);
          }} as="select" className="w-auto language">
            <option value="en">{t("navbar.languages.lang0")}</option>
            <option value="tr">{t("navbar.languages.lang1")}</option>
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
      <SignUpModal show={signupShown} isModalShown={isSignupShown} />
      <Login show={LoginShown} isModalShown={isLoginShown} />
    </>
  );
}

export default NavBar;
