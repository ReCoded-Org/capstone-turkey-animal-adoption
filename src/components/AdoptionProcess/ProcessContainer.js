import React from "react";
import ProcessItems from "./ProcessItems";
import { Container, Row, Col } from "react-bootstrap";

const ProcessContainer = ({ adoptionProcess }) => {
  return (
    <Container>
      <Row className="adoptionContainer py-5">
        <Col sm={12}>
        {adoptionProcess && 
         <>
          <h1>{adoptionProcess.adoptionProcessTitle}</h1>
          <Row className="mt-5 items">
            {adoptionProcess.adoptionProcessItems.map((process) => (
              <ProcessItems 
                key={process.id}
                img={process.img}
                text={process.text}
                firstDescription={process.firstDescription}
                secondDescription={process.secondDescription}
              />
            ))}
          </Row>
         </>
        }
        </Col>
      </Row>
    </Container>
  );
};

export default ProcessContainer;
