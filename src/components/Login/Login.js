import React from "react";
import { Modal, Col, Row, Container } from "react-bootstrap";
import "./Login.css";
import { FaFacebook, FaPaw } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login({ show, hideFn }) {
  return (
    <Modal show={show} animation={false} size="lg" centered>
      <Modal.Body className="modalBody">
        <MdClose size={27} className="close" onClick={() => hideFn(false)} />
        <Container>
          <Row>
            <Col lg={6} className="bgCat"></Col>
            <Col lg={6} className="bgContent">
              <div align="center" className="innerContent">
                <h1>Login Form</h1>
                <ImGoogle3 size={27} className="mr-2 mb-4" />
                <FaFacebook size={27} className="mb-4" />
                <p className="note mb-4">Or use your account to Login </p>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object({
                    password: Yup.string()
                      .min(6, "Must be 6 characters or more")
                      .required("Password is a Required Field"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is a Required Field"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  <Form className="login">
                    <p className="error mb-1">
                      <ErrorMessage name="email" />
                    </p>
                    <Field
                      name="email"
                      type="email"
                      className="form-control mb-4"
                      placeholder="Email"
                    />
                    <p className="error mb-1">
                      <ErrorMessage name="password" />
                    </p>
                    <Field
                      name="password"
                      type="password"
                      className="form-control  mb-5"
                      placeholder="password"
                    />
                    <button type="submit" className="btn btn-primary ">
                      <FaPaw className="pawIcon" />
                      Submit
                    </button>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
