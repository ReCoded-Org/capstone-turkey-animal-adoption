import React, { useState } from "react";
import { Col, Row, Container, Alert } from "react-bootstrap";
import Person from "./person.png";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { initialValues, yupValidation } from "./formikData";
import * as Yup from "yup";
import cities from "../../data/cities";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  const [bio, setBio] = useState(null);
  const [alertShown, isAlertShown] = useState(false);

  return (
    <Container fluid className="mainContainer profile">
      <Container className="pt-3 pb-4">
        <Row>
          <Col lg="4" md="12">
            <div class="p-5 shadow-lg bgWhite fullHeight">
              <img
                src={Person}
                alt="userPhoto"
                width="120"
                height="120"
                className="align-items-center mb-4 avatar"
              />
              <h5 className="align-items-center mb-2 text-uppercase newColor">
                Mohammed Manar Yazji
              </h5>
              <p className="align-items-center  email">
                yazjiamanr92@gmail.com
              </p>
              {bio && (
                <h4 className="align-items-center mb-2 mt-4 newColor">About</h4>
              )}
              <p className="text-center">{bio}</p>
            </div>
          </Col>
          <Col lg="8" md="12" className="mt-lg-0 mt-5">
            <div className="p-5 shadow-lg bgWhite" align="left">
              {alertShown && (
                <Alert variant="success">Your profile has been updated</Alert>
              )}
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(yupValidation)}
                onSubmit={(values, { setSubmitting }) => {
                  isAlertShown(true);
                }}
              >
                {props => {
                  const { values } = props;
                  return (
                    <Form>
                      {setBio(values.bio)}
                      <h3 className="newColor">Personal Details</h3>

                      <div className="row d-flex justify-content-around mt-4 ">
                        <div>
                          <label className="newColor">FullName</label>
                          <br />
                          <Field
                            placeholder="Full Name"
                            type="text"
                            name="fullname"
                            className="shadow rounded inputStyle"
                          />
                          <div className="error">
                            <ErrorMessage name="fullname" />
                          </div>
                        </div>
                        <div>
                          <label className="newColor">Email</label>
                          <br />
                          <input
                            placeholder="Email"
                            type="Email"
                            name="email"
                            value="yazjiamanr92@gmail.com"
                            disabled
                            className="shadow rounded inputStyle"
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-around mt-4">
                        <div>
                          <label className="newColor">Phone</label>
                          <br />
                          <Field
                            placeholder="Phone Number"
                            type="Number"
                            name="phone"
                            className="shadow rounded inputStyle"
                          />
                          <div className="error">
                            <ErrorMessage name="phone" />
                          </div>
                        </div>
                        <div>
                          <label className="newColor">Bio</label>
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
                            <label className="newColor">City</label>
                            <br />
                            <Field
                              component="select"
                              id="city"
                              name="city"
                              multiple={false}
                              className="shadow rounded inputStyle"
                            >
                              <option value="">Select a City</option>
                              {cities.map(city => {
                                return (
                                  <option value="city.name">{city.name}</option>
                                );
                              })}
                            </Field>
                            <div className="error">
                              <ErrorMessage name="city" />
                            </div>
                          </div>
                          <div>
                            <label className="newColor">State</label>
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
                            <label className="newColor">Street</label>
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
                            <label className="newColor">Zip Code</label>
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
                          <input
                            className="m-2 button"
                            type="submit"
                            value="Update"
                          />
                          <button className="m-2 button cancelBtn">
                            Cancel{" "}
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
