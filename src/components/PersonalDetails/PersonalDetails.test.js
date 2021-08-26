import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";

it("Persnal details renders correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <PersonalDetails />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
