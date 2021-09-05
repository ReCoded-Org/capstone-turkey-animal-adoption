import React, { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import "./Search.css";
import { BsGeoAlt } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import AdoptionFormModal from "./AdoptionFormModal";
import { useTranslation } from "react-i18next";

const SearchResults = ({ img, id, location, age, breed, gender, name }) => {
  const [modalShow, setModalShow] = useState(false);

  const { t } = useTranslation();

  return (
    <>
      <Col lg={4} className="mb-5 cardCol">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body id="modalBodySearch">
            <div id="cardText">
              <div className="firstDiv">
                <p>{breed}</p>
                <p>{name}</p>
                <Button
                  variant="primary"
                  className="shadow-none"
                  id="adoptButton"
                  onClick={() => setModalShow(true)}
                >
                  <FaPaw className="pawIcon" />
                  {t("searchPage.button")}
                </Button>
              </div>
              <div className="secondDiv">
                <p>
                  {gender}, {age}
                </p>
                <p className="mt-4">
                  <BsGeoAlt size={25} /> {location}
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <AdoptionFormModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default SearchResults;
