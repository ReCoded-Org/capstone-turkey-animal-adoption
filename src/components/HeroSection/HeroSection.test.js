import HeroSection from "./HeroSection.js";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<HeroSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
