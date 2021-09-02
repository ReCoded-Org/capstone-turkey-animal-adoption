import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./ContactUs.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Vk from "../../images/Vk.png";
import Pinterest from "../../images/Pinterest.png";
import Instagram from "../../images/Instagram.png";
import Twitter from "../../images/Twitter.png";
import Facebook from "../../images/Facebook.png";
import * as emailjs from "emailjs-com";

const contactValidation = {
  from_email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string()
    .min(5, "Must be at least 5 characters")
    .required("Required"),
};

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      from_email: "",
      message: "",
      to_email: "aysebasar91@gmail.com",
    },
    validationSchema: Yup.object(contactValidation),
    onSubmit: (values) => {
      emailjs
        .send(
          "service_71s2u1k",
          "template_vhach26",
          values,
          "user_wB9r1kTnY69BGCuL7Bw3U"
        )
        .then((result) => {
          return result.text;
        });
      alert("Your Message is Submitted");
    },
  });

  return (
    <Container>
      <Row className="contactRow">
        <Col lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6196045518172!2d12.481084264745448!3d41.9010372719587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6053278340d5%3A0xf676f1e1cc02bbb6!2zVHJldmkgw4dlxZ9tZXNp!5e0!3m2!1str!2str!4v1630085669743!5m2!1str!2str"
            height="570"
            style={{ border: "0" }}
            title="map"
            className=" w-100"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
            {formik.touched.from_email && formik.errors.from_email ? (
              <div className="errorMsg">{formik.errors.from_email}</div>
            ) : null}
            <label htmlFor="from_email"></label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.from_email}
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
