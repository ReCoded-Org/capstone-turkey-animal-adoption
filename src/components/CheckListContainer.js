import React from "react";
import CheckList from "./CheckList";
import { Container, Row } from "react-bootstrap";
import "./CheckList.css";

const ChecklistContainer = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Row className="py-5">
        {data.map((info, index) => (
          <CheckList
            text={info.text}
            title={info.title}
            link={info.link}
            key={index}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ChecklistContainer;
