import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";

it("NavBar renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <NavBar />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
