import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "./SearchResults.js";

it("renders SearchResults correctly", () => {
  const tree = renderer.create(<SearchResults />).toJSON();
  expect(tree).toMatchSnapshot();
});
