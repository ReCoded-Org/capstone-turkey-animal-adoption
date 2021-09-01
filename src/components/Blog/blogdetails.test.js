import React from "react";
import renderer from "react-test-renderer";
import BlogDetails from "./BlogDetails.js";

it("renders BlogDetails correctly", () => {
  const tree = renderer.create(<BlogDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});
