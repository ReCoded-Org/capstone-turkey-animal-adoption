/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Container } from "react-bootstrap";
import Person from "./person.png";

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
        <h6
          className="align-items-center mb-2 text-uppercase"
          style={{ color: "#FF5555" }}
        >
          Mohammed Manar Yazji
        </h6>
        <h6 className="align-items-center mb-4 mt-2 font-weight-light">
          yazjiamanr92@gmail.com
        </h6>
        <h4 className="align-items-center mb-2" style={{ color: "#FF5555" }}>
          About
        </h4>
        <p className="text-center" style={{ color: "#777777" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
      </div>

      <form className="col-8 w-75 p-5 d-flex flex-column align-items-center m-5 shadow-lg">
        <Container>
          <h3 style={{ color: "#FF5555" }}>Personal Details</h3>

          <div className="row d-flex justify-content-around mt-4 ">
            <div>
              <label style={{ color: "#FF5555" }}>FullName</label>
              <br />
              <input
                placeholder="Full Name"
                type="text"
                style={{
                  width: 350,
                  border: "0.5px solid",
                  color: "#FF5555",
                }}
                className="shadow rounded"
              />
            </div>

            <div>
              <label style={{ color: "#FF5555" }}>Email</label>
              <br />
              <input
                placeholder="Email"
                type="Email"
                style={{ width: 350, border: "0.5px solid", color: "#FF5555" }}
                className="shadow rounded"
              />
              <br />
              <small id="emailHelp" className="form-text text-muted">
                We willl never share your email with anyone else.
              </small>
            </div>
          </div>

          <div className="row d-flex justify-content-around mt-4">
            <div className="">
              <label style={{ color: "#FF5555" }}>Password</label>
              <br />
              <input
                placeholder="Password"
                type="password"
                style={{
                  width: 350,
                  border: "0.5px solid",
                  color: "#FF5555",
                }}
                className="shadow rounded"
              />
            </div>

            <div>
              <label style={{ color: "#FF5555" }}>Phone</label>
              <br />
              <input
                placeholder="+90 xxx xxx xx xx"
                type="Number"
                style={{
                  width: 350,
                  border: "0.5px solid",
                  color: "#FF5555",
                }}
                className="shadow rounded"
              />
            </div>
          </div>

          <div className="mt-5">
            <h3 style={{ color: "#FF5555" }}>Address</h3>
            <div className="row d-flex justify-content-around mt-4 ">
              <div>
                <label>City</label>
                <br />
                <input
                  placeholder="City Name"
                  type="text"
                  style={{
                    width: 350,
                    border: "0.5px solid",
                    color: "#FF5555",
                  }}
                  className="shadow rounded"
                />
              </div>
              <div>
                <label>Street</label>
                <br />
                <input
                  placeholder="Street"
                  type="text"
                  style={{
                    width: 350,
                    border: "0.5px solid",
                    color: "#FF5555",
                  }}
                  className="shadow rounded"
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
                  style={{
                    width: 350,
                    border: "0.5px solid",
                    color: "#FF5555",
                  }}
                  className="shadow rounded"
                />
              </div>
              <div>
                <label>Zip Code</label>
                <br />
                <input
                  placeholder="Zip Code"
                  type="text"
                  style={{
                    width: 350,
                    border: "0.5px solid",
                    color: "#FF5555",
                  }}
                  className="shadow rounded"
                />
              </div>
            </div>
            <div className="row d-flex mt-4 justify-content-center">
              <input
                className="m-2 "
                type="submit"
                value="Update"
                style={{
                  background: "#00008B",
                  color: "white",
                  width: 200,
                  height: 40,
                  borderRadius: "40px",
                }}
              />
              <input
                className="m-2 "
                type="submit"
                value="Cancel"
                style={{
                  background: "gray",
                  color: "white",
                  width: 200,
                  height: 40,
                  borderRadius: "40px",
                  borderColor: "gray",
                }}
              />
            </div>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default PersonalDetails;
