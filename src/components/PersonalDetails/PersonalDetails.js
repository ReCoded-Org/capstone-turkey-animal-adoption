import React from "react";
import { Container } from "react-bootstrap";
import Person from "./person.png";
import "./PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <div className="row">
      <div className="col w-25 p-5 d-flex flex-column align-items-center m-5 shadow-lg ">
        <img
          src={Person}
          alt="userPhoto"
          width="120"
          height="120"
          className="align-items-center mb-4"
        />
        <h6 className="align-items-center mb-2 text-uppercase newColor">
          Mohammed Manar Yazji
        </h6>
        <h6 className="align-items-center mb-4 mt-2 font-weight-light">
          yazjiamanr92@gmail.com
        </h6>
        <h4 className="align-items-center mb-2 newColor">About</h4>
        <p className="text-center" style={{ color: "#777777" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>

      <form className="col-8 w-75 p-5 d-flex flex-column align-items-center m-5 shadow-lg">
        <Container>
          <h3 className="newColor">Personal Details</h3>

          <div className="row d-flex justify-content-around mt-4 ">
            <div>
              <label className="newColor">FullName</label>
              <br />
              <input
                placeholder="Full Name"
                type="text"
                className="shadow rounded inputStyle"
              />
            </div>

            <div>
              <label className="newColor">Email</label>
              <br />
              <input
                placeholder="Email"
                type="Email"
                className="shadow rounded inputStyle"
              />
              <br />
              <small id="emailHelp" className="form-text text-muted">
                We willl never share your email with anyone else.
              </small>
            </div>
          </div>

          <div className="row d-flex justify-content-around mt-4">
            <div className="">
              <label className="newColor">Password</label>
              <br />
              <input
                placeholder="Password"
                type="password"
                className="shadow rounded inputStyle"
              />
            </div>

            <div>
              <label className="newColor">Phone</label>
              <br />
              <input
                placeholder="+90 xxx xxx xx xx"
                type="Number"
                className="shadow rounded inputStyle"
              />
            </div>
          </div>

          <div className="mt-5">
            <h3 className="newColor">Address</h3>
            <div className="row d-flex justify-content-around mt-4 ">
              <div>
                <label>City</label>
                <br />
                <input
                  placeholder="City Name"
                  type="text"
                  className="shadow rounded inputStyle"
                />
              </div>
              <div>
                <label>Street</label>
                <br />
                <input
                  placeholder="Street"
                  type="text"
                  className="shadow rounded inputStyle"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-around mt-4 ">
              <div>
                <label>State</label>
                <br />
                <input
                  placeholder="State Name"
                  type="text"
                  className="shadow rounded newColor"
                />
              </div>
              <div>
                <label>Zip Code</label>
                <br />
                <input
                  placeholder="Zip Code"
                  type="text"
                  className="shadow rounded inputStyle"
                />
              </div>
            </div>
            <div className="row d-flex mt-4 justify-content-center">
              <input className="m-2 button" type="submit" value="Update" />
              <input className="m-2 button" type="submit" value="Cancel" />
            </div>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default PersonalDetails;
