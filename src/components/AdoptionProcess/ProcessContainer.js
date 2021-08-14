import React from "react";
import ProcessItems from "./ProcessItems";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProcessContainer = ({ 
  adoptionProcessItems, 
  adoptionProcessTitle 
}) => {
  return (
    <Container>
      <Row className="adoptionContainer py-5">
        <Col sm={12}>
          <h1>{adoptionProcessTitle.title}</h1>
          <Row className="mt-5 items">
            {adoptionProcessItems &&
              adoptionProcessItems.map((process) => (
                <ProcessItems
                  key={process.id}
                  img={process.img}
                  text={process.text}
                  firstDescription={process.firstDescription}
                  secondDescription={process.secondDescription}
                />
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcessContainer;
