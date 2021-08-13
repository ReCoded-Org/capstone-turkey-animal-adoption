import React from "react";
import GuestItems from "./GuestItems";
import { Container, Row, Col } from "react-bootstrap";

const GuestContainer = ({ guests, guestsTitle }) => {
  return (
    <Container>
      <Row className="guestsContainer py-5">
        <Col sm={12}>
          <h1>{guestsTitle.title}</h1>
          <h6>{guestsTitle.subTitle}</h6>
          <Row className="mt-5 items">
            {guests &&
              guests.map((guest) => (
                <GuestItems
                  key={guest.id}
                  img={guest.img}
                  buttonText={guest.buttonText}
                />
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestContainer;
