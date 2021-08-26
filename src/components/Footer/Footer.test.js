import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

it("Footer component renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <Footer />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
