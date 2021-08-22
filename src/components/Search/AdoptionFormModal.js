import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./Search.css";
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.adoptionFirstName) {
    errors.adoptionFirstName = 'Required';
  } else if (values.adoptionFirstName.length > 15) {
    errors.adoptionFirstName = 'Must be 15 characters or less';
  }

  if (!values.adoptionLastName) {
    errors.adoptionLastName = 'Required';
  } else if (values.adoptionLastName.length > 20) {
    errors.adoptionLastName = 'Must be 20 characters or less';
  }

  if (!values.adoptionEmail) {
    errors.adoptionEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.adoptionEmail)) {
    errors.adoptionEmail = 'Invalid email address';
  }

  if (!values.adoptionPetName) {
    errors.adoptionPetName = 'Required';
  } else if (values.adoptionPetName.length > 15) {
    errors.adoptionPetName = 'Must be 15 characters or less';
  }

  if (!values.adoptionPetBreed) {
    errors.adoptionPetBreed = 'Required';
  } else if (values.adoptionPetBreed.length > 15) {
    errors.adoptionPetBreed = 'Must be 15 characters or less';
  }

  if (!values.adoptionCity) {
    errors.adoptionCity = 'Required';
  } else if (values.adoptionCity.length > 15) {
    errors.adoptionCity = 'Must be 15 characters or less';
  }

  return errors;
};

const AdoptionFormModal = (props) => {
  const formik = useFormik({
    initialValues: {
      adoptionFirstName: '',
      adoptionLastName: '',
      adoptionEmail: '',
      adoptionPetName: '',
      adoptionPetBreed: '',
      adoptionCity: '',
    },
    validate,
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      alert("Your Form is Submitted");
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
        <form onSubmit={formik.handleSubmit} className="adoptionForm">
          {formik.touched.adoptionFirstName && formik.errors.adoptionFirstName ? (
            <div className="errorMessage">{formik.errors.adoptionFirstName}</div>
          ) : null}
          <label htmlFor="adoptionFirstName"></label>
          <input
            id="adoptionFirstName"
            type="text"
            placeholder="Your First Name"
            {...formik.getFieldProps('adoptionFirstName')}
          />

          {formik.touched.adoptionLastName && formik.errors.adoptionLastName ? (
            <div className="errorMessage">{formik.errors.adoptionLastName}</div>
          ) : null}
          <label htmlFor="adoptionLastName"></label>
          <input
            id="adoptionLastName"
            type="text"
            placeholder="Your Last Name"
            {...formik.getFieldProps('adoptionLastName')}
          />

          {formik.touched.adoptionEmail && formik.errors.adoptionEmail ? (
            <div className="errorMessage">{formik.errors.adoptionEmail}</div>
          ) : null}
          <label htmlFor="adoptionEmail"></label>
          <input
            id="adoptionEmail"
            type="email"
            placeholder="Your Email Address"
            {...formik.getFieldProps('adoptionEmail')}
          />

          {formik.touched.adoptionPetName && formik.errors.adoptionPetName ? (
            <div className="errorMessage">{formik.errors.adoptionPetName}</div>
          ) : null}
          <label htmlFor="adoptionPetName"></label>
          <input
            id="adoptionPetName"
            type="text"
            placeholder="The Name of The Pet You are Adopting"
            {...formik.getFieldProps('adoptionPetName')}
          />

          {formik.touched.adoptionPetBreed && formik.errors.adoptionPetBreed ? (
            <div className="errorMessage">{formik.errors.adoptionPetBreed}</div>
          ) : null}
          <label htmlFor="adoptionPetBreed"></label>
          <input
            id="adoptionPetBreed"
            type="text"
            placeholder="The Breed of The Pet You are Adopting"
            {...formik.getFieldProps('adoptionPetBreed')}
          />

          {formik.touched.adoptionCity && formik.errors.adoptionCity ? (
            <div className="errorMessage">{formik.errors.adoptionCity}</div>
          ) : null}
          <label htmlFor="adoptionCity"></label>
          <input
            id="adoptionCity"
            type="text"
            placeholder="Your City"
            {...formik.getFieldProps('adoptionCity')}
          />

          <Button type="submit" className="modalFormBtn shadow-none">Submit</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modalFormBtn shadow-none">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AdoptionFormModal
