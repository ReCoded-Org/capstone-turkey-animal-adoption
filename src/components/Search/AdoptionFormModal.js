import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Search.css";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const searchModalValidation = {
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  petName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  petBreed: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  userCity: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
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
            firstName: "",
            lastName: "",
            email: "",
            petName: "",
            petBreed: "",
            userCity: "",
          }}
          validationSchema={Yup.object(searchModalValidation)}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert("Your Form is Submitted");
              setSubmitting(false);
            }, 400);
            return JSON.stringify(values, null, 2);
          }}
        >
          <Form className="adoptionForm">
            <div className="errorMessage">
              <ErrorMessage name="firstName" />
            </div>
            <label htmlFor="firstName"></label>
            <Field name="firstName" type="text" placeholder="Your First Name" />
            <div className="errorMessage">
              <ErrorMessage name="lastName" />
            </div>
            <label htmlFor="lastName"></label>
            <Field name="lastName" type="text" placeholder="Your Last Name" />
            <div className="errorMessage">
              <ErrorMessage name="email" />
            </div>
            <label htmlFor="email"></label>
            <Field name="email" type="email" placeholder="Your Email Address" />
            <div className="errorMessage">
              <ErrorMessage name="petName" />
            </div>
            <label htmlFor="petName"></label>
            <Field
              name="petName"
              type="text"
              placeholder="The Name of the Pet You are Adopting"
            />
            <div className="errorMessage">
              <ErrorMessage name="petBreed" />
            </div>
            <label htmlFor="petBreed"></label>
            <Field
              name="petBreed"
              type="text"
              placeholder="The Breed of the Pet You are Adopting"
            />
            <div className="errorMessage">
              <ErrorMessage name="userCity" />
            </div>
            <label htmlFor="userCity"></label>
            <Field name="userCity" type="text" placeholder="Your City" />
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
