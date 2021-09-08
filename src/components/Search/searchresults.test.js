import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "./SearchResults.js";
import store from "../../store/store";
import { Provider } from "react-redux";

it("renders SearchResults correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
