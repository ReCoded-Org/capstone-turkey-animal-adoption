import React from "react";
import catLogo from "../checklistLogo/catLogo.png";
import "./CheckList.css";
import { Col } from "react-bootstrap";

const Checklist = ({ text, title, link }) => {
  return (
    <Col lg={4}>
      <div className="checkList">
        <div className="checkListLogo">
          <img className="catLogo" src={catLogo} />
        </div>
        <h2>{title}</h2>
        <p className="checkListText">{text}</p>
        <a href={link}>
          <button className="checkListButton">Read More</button>
        </a>
      </div>
    </Col>
  );
};

export default Checklist;
