import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/buttonlogo.png";
import "./HeroSection.css"

const HeroSection = (props) => {
    console.log(props)
    const background ={
            backgroundImage: `url(${props.heroSectionMaterial.img})`,

           
          };
    

    
      
    return(
        <Container className="container" style={background}

      >
          <Row className="row">
            <Col sm="8">
              <h2>{props.heroSectionMaterial.title}</h2>
              <p>{props.heroSectionMaterial.text}</p>
              <a href="/search"><button className="findmebutton"><img className="buttonlogo" src={logo}/>Find A Pet</button></a>
            </Col>
          </Row>
        </Container>
    )
    };

export default HeroSection;