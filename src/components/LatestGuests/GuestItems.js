import React from "react";
import { Col } from "react-bootstrap";
import "./LatestGuests.css";

const GuestItems = ({ img, buttonText, id }) => {
  const background = {
    backgroundImage: `url(${img})`,
  };

  return (
    <Col lg={4} className="mb-5 guestItems" style={background}>
      <button className="viewButton">{buttonText}</button>
    </Col>
  );
};

export default GuestItems;
