import React from "react";
import renderer from "react-test-renderer";
import ProcessItems from "./ProcessItems.js";

it("renders correctly", () => {
  const tree = renderer.create(<ProcessItems />).toJSON();
  expect(tree).toMatchSnapshot();
});
