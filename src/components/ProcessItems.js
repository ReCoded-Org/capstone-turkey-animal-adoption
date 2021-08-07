import React from 'react'
import { Col } from 'react-bootstrap';
import "./AdoptionProcess.css"

const ProcessItems = ({ process }) => {
   
    return (
        <Col lg={4} className="mb-5">
            <img src={ process.img } alt="img" className="mb-3"/>
            <p>{ process.text }</p>
            <span>{ process.firstDescription }</span> <br />
            <span>{ process.secondDescription }</span>
        </Col>
    )
}

export default ProcessItems
