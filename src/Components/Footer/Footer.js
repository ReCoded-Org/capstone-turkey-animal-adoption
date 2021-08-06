import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// import { AiFillTwitterCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="page-footer font-small  pt-4">
      <div className="container-fluid text-center text-md-left row">
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase headersColor">Furry Friends</h5>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
          <div className="footer-copyright">
            Copyright © WeDot Wireframe KitAll rights reserved
          </div>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3" />
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase headersColor">PRODUCTS</h5>
          <ul className="list-unstyled ulJustify">
            <li href="#">Features</li>
            <li href="#">Personal License</li>
            <li href="#">Personal License</li>
            <li href="#">Pricing Options</li>
            <li href="#">Personal License</li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase headersColor">LATEST POSTS</h5>
          <ul className="list-unstyled ulJustify">
            <li href="#">
              Lawyaw uses AI to help lawyers draft documents faster
            </li>

            <li href="#">
              Going against the grain, AngelPad kills its demo day
            </li>
          </ul>
          <div>
            <FaPinterestP />
            <FaInstagram />
            <FaFacebook />
            {/* <AiFillTwitterCircle /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
