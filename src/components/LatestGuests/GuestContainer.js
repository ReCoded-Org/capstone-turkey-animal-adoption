import React from "react";
import GuestItems from "./GuestItems";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./LatestGuests.css";
import "bootstrap/dist/css/bootstrap.min.css";

const GuestContainer = ({
  latestAddedGuests,
  latestGuestsTitle
}) => {
  return (
    <Container>
      <Row className="guestsContainer py-5">
        <Col sm={12}>
          <h1>{latestGuestsTitle.title}</h1>
          <h6>{latestGuestsTitle.subTitle}</h6>
          <Row className="mt-5 items">
            {latestAddedGuests &&
              latestAddedGuests.map((guest) => (
                <GuestItems
                  key={guest.id}
                  img={guest.img}
                  buttonText={guest.buttonText}
                  petName={guest.petName}
                  petAge={guest.petAge}
                  petBreed={guest.petBreed}
                />
              ))}
          </Row>
        </Col>
      </Row>

      <Carousel style={{display:"none"}} className="carousel">
        {latestAddedGuests && latestAddedGuests.map(guest => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={guest.img}
              alt="slideImage"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default GuestContainer;