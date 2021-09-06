import React, { useState, useEffect } from "react";
import { Col, Row, Container, Alert } from "react-bootstrap";
import poodle from "../../images/poodle.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { initialValues, yupValidation } from "./formikData";
import * as Yup from "yup";
import cities from "../../data/cities";
import "./PersonalDetails.css";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import { useLocalStorage } from "./useLocalStorage";

const PersonalDetails = () => {
  const user = useSelector((state) => state.user);
  const [fullname, setFullname] = useLocalStorage("fullname", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [bio, setBio] = useLocalStorage("bio", "")
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [city, setCity] = useLocalStorage("city", "");
  const [state, setState] = useLocalStorage("state", "");
  const [street, setStreet] = useLocalStorage("street", "");
  const [zip, setZip] = useLocalStorage("zip", "");
  const [alertShown, isAlertShown] = useState(false);
  const [picture, setPicture] = useLocalStorage("picture", poodle);

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const clearInfo = () => {
    setBio("")
    setPhone("")
    setCity("")
    setState("")
    setStreet("")
    setZip("")
    setPicture(poodle);
  }

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("profile")
        .where("uid", "==", user.uid)
        .get();
      const data = await query.docs[0].data();
      setFullname(data.name);
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while loading user data");
    }
  };

  useEffect(() => {
    if(user) fetchUserName();
  }, [user]);

  return (
    <Container fluid className="mainContainer profile">
      <Container className="pt-3 pb-4">
        <Row>
          <Col lg="4" md="12">
            <div class="bgWhite fullHeight">
              <img
                src={picture}
                alt="userPhoto"
                width="120"
                height="120"
                className="align-items-center mb-4 avatar"
              />
              <input className="mb-5" id="profilePic" type="file" onChange={onChangePicture} />
              <h5 className="mb-2 text-uppercase newColor">
                {fullname}
              </h5>
              <p className="newColor">
                {email}
              </p>
              <p className="profileInfo">
                Tel: {''}
                <span>{phone}</span>
              </p>
              <p className="profileInfo">
                City: {''}
                <span>{city}</span>
              </p>
              <p className="profileInfo">
                State: {''}
                <span>{state}</span>
              </p>
              <p className="profileInfo">
                Street: {''}
                <span>{street}</span>
              </p>
              <p className="profileInfo">
                Zip: {''}
                <span>{zip}</span>
              </p>
              {bio && (
                <h4 className="mb-2 mt-4 newColor">About</h4>
              )}
              <p className="profileInfo">
                Bio: {''}
                <span>{bio}</span>
              </p>
            </div>
          </Col>
          <Col lg="8" md="12" className="mt-lg-0 mt-5 formSection">
            <div className="bgWhite personelInfo" align="left">
              {alertShown && (
                <Alert variant="success">Your profile has been updated</Alert>
              )}
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(yupValidation)}
                onSubmit={(values, { setSubmitting }) => {
                  isAlertShown(true);
                  setFullname(values.fullname)
                  setEmail(values.email);
                  setBio(values.bio)
                  setPhone(values.phone)
                  setCity(values.city)
                  setState(values.state)
                  setStreet(values.street)
                  setZip(values.zip)
                }}
              >
                {(props) => {
                  const { values } = props;
                  return (
                    <>
                      <Form>
                        <h3 className="newColor">Personal Details</h3>
                        <div className="row d-flex justify-content-around mt-4">
                        </div>
                        <div className="row d-flex justify-content-around mt-4">
                          <div>
                            <Field
                              placeholder="Phone Number"
                              type="tel"
                              name="phone"
                              className="shadow inputStyle"
                            />
                            <div className="error">
                              <ErrorMessage name="phone" />
                            </div>
                          </div>
                          <div>
                            <Field
                              placeholder="Bio"
                              name="bio"
                              as="textarea"
                              className="shadow inputStyle"
                            />
                            <div className="error">
                              <ErrorMessage name="bio" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="newColor">Address</h3>
                          <div className="row d-flex justify-content-around mt-4 ">
                            <div>
                              <Field
                                component="select"
                                id="city"
                                name="city"
                                multiple={false}
                                className="shadow inputStyle"
                              >
                                <option value="">Select a City</option>
                                {cities.map((city) => {
                                  return (
                                    <option name="city">{city.name}</option>
                                  );
                                })}
                              </Field>
                              <div className="error">
                                <ErrorMessage name="city" />
                              </div>
                            </div>
                            <div>
                              <Field
                                placeholder="State Name"
                                type="text"
                                name="state"
                                className="shadow inputStyle"
                              />
                              <div className="error">
                                <ErrorMessage name="state" />
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex justify-content-around mt-4 ">
                            <div>
                              <Field
                                placeholder="Street"
                                type="text"
                                name="street"
                                className="shadow inputStyle"
                              />
                              <div className="error">
                                <ErrorMessage name="street" />
                              </div>
                            </div>
                            <div>
                              <Field
                                placeholder="Zip Code"
                                type="text"
                                name="zip"
                                className="shadow inputStyle"
                              />
                              <div className="error">
                                <ErrorMessage name="zip" />
                              </div>
                            </div>
                          </div>
                          <div className="row d-flex mt-5 justify-content-center">
                            <button
                              className="m-2 button"
                              type="submit"
                            >
                              Update
                            </button>
                            <button
                              className="m-2 button cancelBtn"
                              onClick={clearInfo}
                              type="button"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </Form>
                    </>
                  );
                }}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PersonalDetails;