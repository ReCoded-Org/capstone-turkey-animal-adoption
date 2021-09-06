import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import store from "../../store/store";
import { Provider } from "react-redux";

it("Persnal details renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <PersonalDetails />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
