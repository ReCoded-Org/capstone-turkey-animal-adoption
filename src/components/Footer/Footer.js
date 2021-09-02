import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import dog from "./Bg.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="text-center text-lg-start mt-5 pb-3">
      <div className="container p-2">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex align-items-center pb-4 pt-4">
              <div className="p-2">
                <NavLink to="/">
                  <img src={logo} alt="my logo" width="100" />
                </NavLink>
              </div>
              <div className="p-2">
                <h3>Furry</h3>
                <h3>Friends</h3>
              </div>
            </div>
            <div className="pt-4 text-white">
            {t("footer.allRights")}
            </div>
          </div>
          <div className="col-md-4 pl-lg-5 pl-md-5 pl-0 mt-3">
            <h4>{t("footer.title0")}</h4>
            <ul className="list-group">
              <li className="list-unstyled text-white">
                <NavLink to="/" className="text-white">
                {t("footer.subTitleHome")}
                </NavLink>
              </li>
              <li className="list-unstyled text-white">
                <NavLink to="/about" className="text-white">
                {t("footer.subTitleAbout")}
                </NavLink>
              </li>
              <li className="list-unstyled text-white">
                <NavLink to="/search" className="text-white">
                {t("footer.subTitleFindPet")}
                </NavLink>
              </li>
              <li className="list-unstyled text-white">
                <NavLink to="/blog" className="text-white">
                {t("footer.subTitleBlog")}
                </NavLink>
              </li>
              <li className="list-unstyled text-white">
                <NavLink to="/contact" className="text-white">
                {t("footer.subTitleContact")}
                </NavLink>
              </li>
              <li className="list-unstyled text-white">
                <NavLink to="/resources" className="text-white">
                {t("footer.subTitleResources")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-4  mt-3 pl-lg-5 pl-0">
            <h4>{t("footer.title1")}</h4>
            <ul className="list-group pb-2">
              <div className=" d-flex align-items-center">
                <img
                  src={dog}
                  alt="dog"
                  width="80"
                  height="60"
                  className="m-1"
                />
                <li className="list-unstyled text-white ">
                  Lawyaw uses AI to help lawyers draft documents faster
                </li>
              </div>
              <div className="d-flex align-items-center pt-2">
                <img
                  src={dog}
                  alt="dog"
                  width="80"
                  height="60"
                  className="m-1"
                />
                <li className="list-unstyled text-white">
                  Going against the grain, AngelPad kills its demo day
                </li>
              </div>
            </ul>
            <div className="d-sm-flex justify-content-sm-center pt-2">
              <div className="p-2">
                <FaFacebookF />
              </div>
              <div className="p-2">
                <FaTwitter />
              </div>
              <div className="p-2">
                <FaPinterestP />
              </div>
              <div className="p-2 ">
                <FaInstagram />
              </div>
              <div className="p-2">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
