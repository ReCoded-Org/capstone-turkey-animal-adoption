import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Search.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as emailjs from "emailjs-com";

const searchModalValidation = {
  from_name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  from_lastname: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  from_email: Yup.string().email("Invalid email address").required("Required"),
  from_petname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  from_petbreed: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  from_city: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
};

const sendEmail = (formData) => {
  emailjs
    .send(
      "service_71s2u1k",
      "template_bq06lrm",
      formData,
      "user_wB9r1kTnY69BGCuL7Bw3U"
    )
    .then((result) => {
      return result.text;
    });
};

const AdoptionFormModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adoption Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="adoptionFormModalBody">
        <h4 className="mb-4">Fill Our Form for Adoption Process</h4>
        <Formik
          initialValues={{
            from_name: "",
            from_lastname: "",
            from_email: "",
            from_petname: "",
            from_petbreed: "",
            from_city: "",
            to_email: "aysebasar91@gmail.com",
          }}
          validationSchema={Yup.object(searchModalValidation)}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert("Your Form is Submitted");
              sendEmail(values);
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          <Form className="adoptionForm">
            <div className="errorMessage">
              <ErrorMessage name="from_name" />
            </div>
            <label htmlFor="from_name"></label>
            <Field name="from_name" type="text" placeholder="Your First Name" />
            <div className="errorMessage">
              <ErrorMessage name="from_lastname" />
            </div>
            <label htmlFor="from_lastname"></label>
            <Field
              name="from_lastname"
              type="text"
              placeholder="Your Last Name"
            />
            <div className="errorMessage">
              <ErrorMessage name="from_email" />
            </div>
            <label htmlFor="from_email"></label>
            <Field
              name="from_email"
              type="email"
              placeholder="Your Email Address"
            />
            <div className="errorMessage">
              <ErrorMessage name="from_petname" />
            </div>
            <label htmlFor="from_petname"></label>
            <Field
              name="from_petname"
              type="text"
              placeholder="The Name of the Pet You are Adopting"
            />
            <div className="errorMessage">
              <ErrorMessage name="from_petbreed" />
            </div>
            <label htmlFor="from_petbreed"></label>
            <Field
              name="from_petbreed"
              type="text"
              placeholder="The Breed of the Pet You are Adopting"
            />
            <div className="errorMessage">
              <ErrorMessage name="from_city" />
            </div>
            <label htmlFor="from_city"></label>
            <Field name="from_city" type="text" placeholder="Your City" />
            <Button type="submit" className="modalFormBtn shadow-none">
              Submit
            </Button>
          </Form>
        </Formik>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modalFormBtn shadow-none">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AdoptionFormModal;
