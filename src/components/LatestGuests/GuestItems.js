import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import "./LatestGuests.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const GuestItems = ({ img, buttonText, petName, petAge, petBreed, id }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const background = {
    backgroundImage: `url(${img})`,
  };

  const { t } = useTranslation();

  return (
    <>
      <Col lg={4} className="mb-5">
        <div className="guestItems" style={background}></div>
        <Button
          className="shadow-none"
          id="viewButton"
          variant="primary"
          onClick={() => handleToggle()}
        >
          {buttonText}
        </Button>
      </Col>
      <Modal show={show} onHide={() => handleToggle()} className="modal-open">
        <Modal.Header id="modalHeader">
          <Modal.Title>
            <img src={img} className="modalImage" alt="modalImage" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalBody">
          <p>My Name is {petName}</p>
          <p>I am {petAge} old</p>
          <p>I am a {petBreed}</p>
        </Modal.Body>
        <Modal.Footer id="modalFooter">
          <Button
            className="shadow-none"
            id="closeButton"
            variant="secondary"
            onClick={() => handleToggle()}
          >
            {t("latestGuest.button1")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GuestItems;
