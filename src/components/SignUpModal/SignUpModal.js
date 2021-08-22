import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { Modal, Button, Col, Container, Row } from "react-bootstrap";
import "./SignUpModal.css";
import blackCat from "../../images/catSignUpModal.png";
import { useFormik } from 'formik';

function SignUpModal(props) {
  
  const validate = values => {
    const errors = {};
  
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
  
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };



  const formik = useFormik({
    initialValues: {
      firstName: '',
      password: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    // <Modal
    //   id="modalSignUp"
    //   {...props}
    //   size="lg"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >

    //   <Modal.Body>
    //     <img className="catSignUpModal" src={blackCat} alt="CatLogo" />
    //   </Modal.Body>

    //   <Modal.Header closeButton>
    //     <Modal.Title id="contained-modal-title-vcenter">
    //       Create Account
    //     </Modal.Title>
    //     <form onSubmit={formik.handleSubmit}>
    //       {formik.touched.firstName && formik.errors.firstName ? (
    //         <div className="errorMessage">{formik.errors.firstName}</div>
    //       ) : null}
    //       <label htmlFor="firstName"></label>
    //       <input
    //         id="firstName"
    //         type="text"
    //         placeholder="Your First Name"
    //         {...formik.getFieldProps('firstName')}
    //       />

    //       {/* {formik.touched.password && formik.errors.password ? (
    //         <div className="errorMessage">{formik.errors.password}</div>
    //       ) : null}
    //       <label htmlFor="password"></label>
    //       <input
    //         id="password"
    //         type="password"
    //         placeholder="password"
    //         {...formik.getFieldProps('password')}
    //       /> */}

    //       {formik.touched.email && formik.errors.email ? (
    //         <div className="errorMessage">{formik.errors.email}</div>
    //       ) : null}
    //       <label htmlFor="email"></label>
    //       <input
    //         id="email"
    //         type="email"
    //         placeholder="Your Email Address"
    //         {...formik.getFieldProps('email')}
    //       />

    //       <Button type="submit" className="modalFormBtn shadow-none">Submit</Button>
    //     </form>

    //   </Modal.Header>

    //   {/* <Modal.Footer>
    //       <Button onClick={props.onHide}>Close</Button>
    //     </Modal.Footer> */}
    // </Modal>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={6}>
            <img className="catSignUpModal" src={blackCat} alt="CatLogo" />
            </Col>
            <Col xs={12} md={6}>
                 <form onSubmit={formik.handleSubmit}>
           {formik.touched.firstName && formik.errors.firstName ? (
            <div className="errorMessage">{formik.errors.firstName}</div>
          ) : null}
          <label htmlFor="firstName"></label>
          <input
            id="firstName"
            type="text"
            placeholder="Your First Name"
            {...formik.getFieldProps('firstName')}
          />

          {/* {formik.touched.password && formik.errors.password ? (
            <div className="errorMessage">{formik.errors.password}</div>
          ) : null}
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            placeholder="password"
            {...formik.getFieldProps('password')}
          /> */}

          {formik.touched.email && formik.errors.email ? (
            <div className="errorMessage">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            placeholder="Your Email Address"
            {...formik.getFieldProps('email')}
          />

          <Button type="submit" className="modalFormBtn shadow-none">Submit</Button>
        </form>
            </Col>
          </Row>

        </Container>
      </Modal.Body>
      
    </Modal>

  );
}


export default SignUpModal;
