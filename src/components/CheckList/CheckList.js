import React from "react";
import catLogo from "../../checklistLogo/catLogo.png";
import "./CheckList.css";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Checklist = ({ text, title, link }) => {
  const { t } = useTranslation();

  return (
    <Col lg={4}>
      <div className="checkList">
        <div className="checkListLogo">
          <img className="catLogo" src={catLogo} />
        </div>
        <h2>{title}</h2>
        <p className="checkListText">{text}</p>
        <a href={link} target="_blank">
          <button className="checkListButton">{t("checklistButton")}</button>
        </a>
      </div>
    </Col>
  );
};

export default Checklist;
