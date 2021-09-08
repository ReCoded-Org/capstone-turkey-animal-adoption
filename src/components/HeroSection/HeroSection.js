import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/buttonlogo.png";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const HeroSection = ({ img, title, text, side }) => {
  const { t } = useTranslation();

  const background = {
    backgroundImage: `url(${img})`,
  };

  const changeLeftOrRight = () => {
    if (side === "left") {
      return "containerForLeft";
    } else {
      return "containerForRight";
    }
  };

  return (
    <Container className={changeLeftOrRight()} style={background}>
      <Row>
        <Col sm="8">
          <h2>{title}</h2>
          <p>{text}</p>
          <NavLink to="/search">
            <button className="findMeButton">
              <img className="buttonLogo" src={logo} />
              {t("heroSectionHome.button")}
            </button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
