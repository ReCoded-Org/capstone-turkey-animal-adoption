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
  const [buttonText, setButtonText] = useState("Submit");

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]));
  };

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
    fetchUserName();
  }, [user]);

  return (
    <Container fluid className="mainContainer profile">
      <Container className="pt-3 pb-4">
        <Row>
          <Col lg="4 profileSection" md="12">
            <div class="p-5 shadow-lg bgWhite fullHeight">
              <img
                src={picture}
                alt="userPhoto"
                width="120"
                height="120"
                className="align-items-center mb-4 avatar"
              />
              <input className="mb-5" id="profilePic" type="file" onChange={onChangePicture} />
              <h5 className="align-items-center mb-2 text-uppercase newColor">
                {fullname}
              </h5>
              <p className="align-items-center  email">
                {email}
              </p>
              <p className="align-items-center  email">
                Tel: {phone}
              </p>
              <p className="align-items-center  email">
                City: {city}
              </p>
              <p className="align-items-center  email">
                State: {state}
              </p>
              <p className="align-items-center  email">
                Street: {street}
              </p>
              <p className="align-items-center  email">
                Zip:{zip}
              </p>
              {bio && (
                <h4 className="align-items-center mb-2 mt-4 newColor">About</h4>
              )}
              <p className="text-center">Bio: {bio}</p>
            </div>
          </Col>
          <Col lg="8" md="12" className="mt-lg-0 mt-5 formSection">
            <div className="p-5 shadow-lg bgWhite" align="left">
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
                    <Form>
                      <h3 className="newColor">Personal Details</h3>
                      <div className="row d-flex justify-content-around mt-4 ">
                        <div>
                          <label className="newColor"></label>
                          <br />
                          <Field
                            placeholder="Full Name"
                            type="text"
                            name="fullname"
                            // {...(!toggle ? {disabled: 'disabled'} : {})}
                            className="shadow rounded inputStyle"
                          />
                          <div className="error">
                            <ErrorMessage name="fullname" />
                          </div>
                        </div>
                        <div>
                          <label className="newColor"></label>
                          <br />
                          <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            disabled
                            className="fullname shadow rounded inputStyle"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-around mt-4">
                        <div>
                          <label className="newColor"></label>
                          <br />
                          <Field
                            placeholder="Phone Number"
                            type="tel"
                            name="phone"
                            className="shadow rounded inputStyle"
                          />
                          <div className="error">
                            <ErrorMessage name="phone" />
                          </div>
                        </div>
                        <div>
                          <label className="newColor"></label>
                          <br />
                          <Field
                            placeholder="Bio"
                            name="bio"
                            as="textarea"
                            className="shadow rounded inputStyle"
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
                            <label className="newColor"></label>
                            <br />
                            <Field
                              component="select"
                              id="city"
                              name="city"
                              multiple={false}
                              className="shadow rounded inputStyle"
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
                            <label className="newColor"></label>
                            <br />
                            <Field
                              placeholder="State Name"
                              type="text"
                              name="state"
                              className="shadow rounded inputStyle"
                            />
                            <div className="error">
                              <ErrorMessage name="state" />
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-around mt-4 ">
                          <div>
                            <label className="newColor"></label>
                            <br />
                            <Field
                              placeholder="Street"
                              type="text"
                              name="street"
                              className="shadow rounded inputStyle"
                            />
                            <div className="error">
                              <ErrorMessage name="street" />
                            </div>
                          </div>
                          <div>
                            <label className="newColor"></label>
                            <br />
                            <Field
                              placeholder="Zip Code"
                              type="text"
                              name="zip"
                              className="shadow rounded inputStyle"
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
                            onClick={() => setButtonText("Update")}
                          >
                            {buttonText}
                            {/* {!toggle ? "Submit" : "Update"} */}
                          </button>    
                        </div>
                      </div>
                    </Form>
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