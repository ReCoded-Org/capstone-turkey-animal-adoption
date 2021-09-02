import React from "react";
import GuestItems from "./GuestItems";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./LatestGuests.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

<<<<<<< HEAD
const GuestContainer = ({ latestAddedGuests, latestGuestsTitle }) => {
   
=======
const GuestContainer = ({ latestGuest }) => {
>>>>>>> 5b0fe7b10be384487838d9f0f8f52497f98f9408
  //const { t } = useTranslation();
  console.log("hi" + latestGuest);
  return (
    <Container>
      <Row className="guestsContainer py-5">
        <Col sm={12}>
          {latestGuest && (
            <>
              <h1>{latestGuest.title}</h1>
              <h6>{latestGuest.text}</h6>
              <Row className="mt-5 carouselItems">
                {latestGuest.latestAddedGuests.latestGuestItems.map(guest => (
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
      {/* <Carousel style={{ display: "none" }} className="carousel">
        {latestGuest.latestAddedGuests.latestGuestsItems &&
          latestGuest.latestAddedGuests.latestGuestsItems.map(guest => (
            <Carousel.Item key={guest.id}>
              <img
                className="d-block w-100 sliderImg"
                src={guest.img}
                alt="slideImage"
              />
            </Carousel.Item>
          ))}
      </Carousel> */}
    </Container>
  );
};

export default GuestContainer;
