import React, { useState } from "react";
import { Col, Modal, Button, Card } from "react-bootstrap";
import "./Search.css";
import { BsGeoAlt } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";

const SearchResults = ({ img, id, location, age, breed, gender }) => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <Col lg={4} className="mb-5">
                {/* <img src={img} alt="image" className="searchImage"/> */}
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body id="modalBody">
                        <Card.Text id="cardText">
                            <div className="firstDiv">
                                <p>{breed}</p>
                                <Button variant="primary" className="adoptButton" onClick={() => handleToggle()}>
                                    <FaPaw className="pawIcon"/>
                                    Adopt
                                </Button>
                            </div>
                            <div className="secondDiv">
                                <p>{gender}, {age}</p>
                                <p className="mt-4"><BsGeoAlt size={25}/> {location}</p>
                                {/* <BsGeoAlt size={25}/> */}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={show} onHide={() => handleToggle()} className="modal-open">
        <Modal.Header closeButton id="modalHeader">
          <Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modalBody">
          <p>My Name is</p>
          <p>I am old</p>
          <p>I am a</p>
        </Modal.Body>
        <Modal.Footer id="modalFooter">
          <Button
            className="shadow-none"
            id="closeButton"
            variant="secondary"
            onClick={() => handleToggle()}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    );
};

export default SearchResults;