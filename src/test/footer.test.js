import React from "react";
import renderer from "react-test-renderer";
import Footer from "../Component/Footer/footer";

it("renders correctly", () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
