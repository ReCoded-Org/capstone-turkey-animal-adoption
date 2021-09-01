import React from "react";
import renderer from "react-test-renderer";
import Blog from "./Blog.js";

it("renders Blog correctly", () => {
  const tree = renderer.create(<Blog />).toJSON();
  expect(tree).toMatchSnapshot();
});
