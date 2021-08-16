import React from "react";
import GuestItems from "./GuestItems";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./LatestGuests.css";

const GuestContainer = ({ latestAddedGuests }) => {
  return (
    <Container>
      <Row className="guestsContainer py-5">
        <Col sm={12}>
          {latestAddedGuests && (
            <>
              <h1>{latestAddedGuests.latestGuestsTitle.title}</h1>
              <h6>{latestAddedGuests.latestGuestsTitle.subTitle}</h6>
              <Row className="mt-5 items">
                  {latestAddedGuests.latestGuestsItems.map((guest) => (
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
            </>
          )}
        </Col>
      </Row>

      <Carousel style={{ display: "none" }} className="carousel">
        {latestAddedGuests && latestAddedGuests.latestGuestsItems.map(guest => (
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