import HeroSection from "./HeroSection.js";
import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";

const data = {
  img:
    "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
  title: "Adopt Please",
  text: "We are non-profit organization",
  side: "left",
};

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <HeroSection
          img={data.img}
          title={data.title}
          text={data.text}
          side={data.side}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
