import React, { useState } from "react";
import { Col, Button, Card } from "react-bootstrap";
import "./Search.css";
import { BsGeoAlt } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import AdoptionFormModal from "./AdoptionFormModal";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import { useLocalStorage } from "../PersonalDetails/useLocalStorage";
import * as emailjs from "emailjs-com";

const SearchResults = ({ img, id, location, age, breed, gender, name }) => {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [LoginShown, isLoginShown] = useState(false);
  const [message, setMessage] = useState("");
  const [adoptButton, setAdoptButton] = useState(t("searchPage.button"));
  const phone = useLocalStorage("phone", "");
  const city = useLocalStorage("city", "");
  const user = useSelector((state) => state.user);

  const sendMail = () => {
    setMessage("");
    setAdoptButton("Loading ...");
    const emailParams = {
      from_name: user.name,
      from_phone: phone,
      from_email: user.email,
      from_city: city,
      from_petname: name,
      from_petbreed: breed,
    };
    emailjs
      .send(
        "service_gmz8yep",
        "template_xfkp32m",
        emailParams,
        "user_kzsnySDvDdrtgNCu03zXF"
      )
      .then((result) => {
        setMessage("your adoption application was sent to admins");
        setAdoptButton(t("searchPage.button"));
      })
      .catch((error) => {
        setMessage("There was an error in sending your application");
        setAdoptButton(t("searchPage.button"));
      });
  };

  return (
    <>
      <Col lg={4} className="mb-5 cardCol">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body id="modalBodySearch">
            <div id="cardText">
              <div className="firstDiv">
                <p>{breed}</p>
                <p>{name}</p>
                {!user && (
                  <Button
                    variant="primary"
                    className="shadow-none"
                    id="adoptButton"
                    onClick={() => isLoginShown(true)}
                  >
                    <FaPaw className="pawIcon" />
                    Login To Adopt
                  </Button>
                )}
                {user && (
                  <Button
                    variant="primary"
                    className="shadow-none"
                    id="adoptButton"
                    onClick={sendMail}
                  >
                    <FaPaw className="pawIcon" />
                    {adoptButton}
                  </Button>
                )}
              </div>
              <div className="secondDiv">
                <p>
                  {gender}, {age}
                </p>
                <p className="mt-4">
                  <BsGeoAlt size={25} /> {location}
                </p>
              </div>
            </div>
            <p class="mt-3 mb-0">{message}</p>
          </Card.Body>
        </Card>
      </Col>
      <AdoptionFormModal show={modalShow} onHide={() => setModalShow(false)} />
      <Login show={LoginShown} isModalShown={isLoginShown} />
    </>
  );
};

export default SearchResults;
