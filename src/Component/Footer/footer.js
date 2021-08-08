import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import dog from "./Bg.png";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start mt-4 pb-3">
      <div className="container p-2">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center pb-4 pt-4">
              <div className="p-2">
                <img src={logo} alt="my logo" width="160" height="120" />
              </div>
              <div className="p-2">
                <h3>Furry</h3>
                <h3>Friends</h3>
              </div>
            </div>
            <div className="pt-4 text-white">
              Copyright © All rights reserved for Re:Coded
            </div>
          </div>

          <div className="col">
            <h4>PRODUCTS</h4>
            <ul className="list-group">
              <li className="list-unstyled text-white">Features </li>
              <li className="list-unstyled text-white">Personal License </li>
              <li className="list-unstyled text-white">Personal License </li>
              <li className="list-unstyled text-white">Pricing Options </li>
              <li className="list-unstyled text-white">Personal License</li>
            </ul>
          </div>

          <div className="col pb-2">
            <h4>LATEST POSTS</h4>
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
              <div className=" d-flex align-items-center pt-2">
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
