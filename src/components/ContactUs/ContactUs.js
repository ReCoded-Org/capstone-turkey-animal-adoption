import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./ContactUs.css"
import { useFormik } from 'formik';


const apiKey = "AIzaSyBEwGghzBic4ZMnL1fEOAfGTQbAait9FhQ"

const mapStyles = {
  width: '100%',
  height: '450px'
};



const ContactUs = (props) => {
  const formik = useFormik({
    initialValues: {
      message: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Row className="contactRow">
        <Col sm={6}>
          <Map
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
            className="map"
          >
            <Marker position={{ lat: 48.00, lng: -122.00 }} />
          </Map>
        </Col>
        <Col sm={6} className="contactUs">
          <h1>Get In Touch</h1>
          <p>Contact Us On the Social Media</p>
          <p>Or Send Us a Message</p>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <label htmlFor="message">Last Name</label>
            <textarea
              id="message"
              name="message"
              col="50"
              row="50"
              onChange={formik.handleChange}
              value={formik.values.message}
            />

            <Button className="contactBtn shadow-none" type="submit">Send</Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};


export default GoogleApiWrapper({
  apiKey: `${apiKey}`
})(ContactUs);