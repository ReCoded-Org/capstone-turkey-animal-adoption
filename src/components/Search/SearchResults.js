import React, { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import "./Search.css";
import { BsGeoAlt } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import AdoptionFormModal from "./AdoptionFormModal"


const SearchResults = ({ img, id, location, age, breed, gender, name }) => {

  const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Col lg={4} className="mb-5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body id="modalBody">
                        <Card.Text id="cardText">
                            <div className="firstDiv">
                                <p>{breed}</p>
                                <p>{name}</p>
                                <Button variant="primary" className="adoptButton shadow-none" onClick={() => setModalShow(true)}>
                                    <FaPaw className="pawIcon"/>
                                    Adopt
                                </Button>
                            </div>
                            <div className="secondDiv">
                                <p>{gender}, {age}</p>
                                <p className="mt-4"><BsGeoAlt size={25}/> {location}</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <AdoptionFormModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default SearchResults;