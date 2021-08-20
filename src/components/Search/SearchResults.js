import React, { useState } from "react";
import { Col, Modal, Button, Card } from "react-bootstrap";
import "./Search.css";
import { BsGeoAlt } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";

const SearchResults = ({ img, id, location, age, breed, gender }) => {

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
                                <Button variant="primary" className="adoptButton">
                                    <FaPaw className="pawIcon"/>
                                    Adopt
                                </Button>
                            </div>
                            <div className="secondDiv">
                                <p>{gender},{age}</p>
                                <p>{location}</p>
                                {/* <BsGeoAlt size={25}/> */}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SearchResults;