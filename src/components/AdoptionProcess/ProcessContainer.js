import React from "react";
import ProcessItems from "./ProcessItems";
import { Container, Row, Col } from "react-bootstrap";
import { adoptionProcess } from "./data";

const ProcessContainer = () => {
  // here import of adoptionProcess is coming from data.js file.
  // this will be imported to app.js or wherever this component is rendered and then will come here as props
  // but since i have to change the app to default, i will delete data importation from app for now
  // and will import here because if i dont, test is giving an "map is undefined error"
  // in the future the data will be imported as props to this component from wherever it rendered.

  return (
    <Container>
      <Row className="adoptionContainer py-5">
        <Col sm={12}>
          <h1>Pet Adoption Process</h1>
          <Row className="mt-5 items">
            {adoptionProcess.map((process) => (
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
