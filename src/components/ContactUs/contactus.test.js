import React from "react";
import renderer from "react-test-renderer";
import ContactUs from "./ContactUs.js";

it("renders ContactUs Component correctly", () => {
  const tree = renderer
    .create(<ContactUs />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
