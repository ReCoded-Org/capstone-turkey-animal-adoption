import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/buttonlogo.png";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";


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
          <a href="/search">
            <button className="findMeButton">
              <img className="buttonLogo" src={logo} />
              {t("heroSectionHome.button")}
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
