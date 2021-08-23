import React from "react";
import {
  FaPinterestP,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="page-footer font-small  pt-2 pb-4">
      <div className="container-fluid text-center text-md-left row">
        <div className="col-md-3 mb-md-0 mb-3 container pt-4 ">
          <div className="row pt-3">
            <div className="col-md-6 ">
              <img src={logo} alt="myLogo" width="100px" height="80px" />
            </div>
            <div className="col-md-6 align-self-center  ">
              <h2 className="text-uppercase headersColor ">Furry Friends</h2>
            </div>
          </div>

          <div className="footer-copyright pt-5">
            Copyright © WeDot Wireframe KitAll rights reserved
          </div>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3 " />
        <div className="col-md-3 mb-md-0 mb-3 pt-2 mr-4">
          <h6 className="text-uppercase headersColor">Main Menu</h6>
          <ul className="list-unstyled ulJustify">
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Blog</li>
            <li href="#">Contact</li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3 pt-2 mr-4">
          <h6 className="text-uppercase headersColor">LATEST POSTS</h6>
          <ul className="list-unstyled ulJustify">
            <li href="#">
              Lawyaw uses AI to help lawyers draft documents faster
            </li>

            <li href="#">
              Going against the grain, AngelPad kills its demo day
            </li>
          </ul>
          <div className="d-flex justify-content-center pt-4">
            <div className="m-2">
              <FaPinterestP />
            </div>
            <div className="m-2">
              <FaInstagram />
            </div>
            <div className="m-2">
              <FaFacebookF />
            </div>
            <div className="m-2">
              <FaTwitter />
            </div>

            {/* <AiFillTwitterCircle /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
