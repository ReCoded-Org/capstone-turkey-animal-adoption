import React from 'react'
import { Col } from 'react-bootstrap';
import "./AdoptionProcess.css"

const ProcessItems = ({ img, text, firstDescription, secondDescription }) => {
   
    return (
        <Col lg={4} className="mb-5">
            <img src={ img } alt="img" className="mb-3"/>
            <p>{ text }</p>
            <span>{ firstDescription }</span> <br />
            <span>{ secondDescription }</span>
        </Col>
    )
}

export default ProcessItems

