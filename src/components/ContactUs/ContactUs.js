import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./ContactUs.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Vk from "../../images/Vk.png";
import Pinterest from "../../images/Pinterest.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import Facebook from "../../images/Facebook.png";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const contactValidation = {
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Required"),
};

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: Yup.object(contactValidation),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Row className="contactRow">
        <Col lg={6}>
          <LoadScript googleMapsApiKey="AIzaSyBEwGghzBic4ZMnL1fEOAfGTQbAait9FhQ">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              <Marker position={{ lat: -3.745, lng: -38.523 }} />
              <></>
            </GoogleMap>
          </LoadScript>
        </Col>
        <Col lg={6} className="contactUs">
          <h1>Get In Touch</h1>
          <p>
            Contact Us On the Social Media <br />
            Or Send Us a Message
          </p>
          <div className="mb-5">
            <img src={Vk} alt="vkLogo" className="mr-2" />
            <img src={Pinterest} alt="pinterestLogo" className="mr-2" />
            <img src={Instagram} alt="intagramLogo" className="mr-2" />
            <img src={Twitter} alt="twitterLogo" className="mr-2" />
            <img src={Facebook} alt="facebookLogo" />
          </div>
          <form onSubmit={formik.handleSubmit} className="contactUsForm">
            {formik.touched.email && formik.errors.email ? (
              <div className="errorMsg">{formik.errors.email}</div>
            ) : null}
            <label htmlFor="email"></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="errorMsg">{formik.errors.message}</div>
            ) : null}
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              col="50"
              row="50"
              placeholder="Message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            <Button className="contactBtn shadow-none" type="submit">
              Send
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
