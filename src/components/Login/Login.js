import React, { useState } from "react";
import { Modal, Col, Row, Container, Alert } from "react-bootstrap";
import "./Login.css";
import { FaFacebook, FaPaw } from "react-icons/fa";
import { ImGoogle3 } from "react-icons/im";
import { MdClose } from "react-icons/md";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "../../store/actions/actionConst";
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithEmailAndPassword,
} from "../../helpers/auth";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function Login({ show, isModalShown }) {
  const [errorMsg, setErrorMsg] = useState(false);
  const dispatch = useDispatch();

  const signWithSocial = async (social) => {
    let fnCall = social === "facebook" ? signInWithFacebook : signInWithGoogle;
    const result = await fnCall();
    if (result.error) {
      setErrorMsg("Something went wrong");
    } else {
      setErrorMsg(false);
      dispatch({ type: SIGN_IN, payload: result });
      isModalShown(false);
    }
  };

  const signIn = async (data, setSubmitting) => {
    const result = await signInWithEmailAndPassword(data);
    if (result.error) {
      if (result.error.customError) {
        setErrorMsg(result.error.customError);
      } else {
        setErrorMsg("Something went wrong");
      }
      setSubmitting(false);
    } else {
      setSubmitting(false);
      setErrorMsg(false);
      dispatch({ type: SIGN_IN, payload: result });
      isModalShown(false);
    }
  };

  const { t } = useTranslation();

  return (
    <Modal show={show} animation={false} size="lg" centered>
      <Modal.Body className="modalBody">
        <MdClose
          size={27}
          className="close"
          onClick={() => isModalShown(false)}
        />
        <Container>
          <Row>
            <Col lg={6} className="bgCat"></Col>
            <Col lg={6} className="bgContent">
              <div align="center" className="innerContent">
                <h1>{t("loginModal.title")}</h1>
                {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
                <ImGoogle3
                  size={27}
                  className="mr-2 mb-4"
                  onClick={() => signWithSocial("google")}
                />
                <FaFacebook
                  size={27}
                  className="mb-4"
                  onClick={() => signWithSocial("facebook")}
                />
                <p className="note mb-4">{t("loginModal.text")} </p>
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
                    signIn(values, setSubmitting);
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
                      placeholder={t("loginModal.placeholder0")}
                    />
                    <p className="error mb-1">
                      <ErrorMessage name="password" />
                    </p>
                    <Field
                      name="password"
                      type="password"
                      className="form-control  mb-5"
                      placeholder={t("loginModal.placeholder1")}
                    />
                    <button type="submit" className="btn btn-primary ">
                      <FaPaw className="pawIcon" />
                      {t("loginModal.button")}
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
