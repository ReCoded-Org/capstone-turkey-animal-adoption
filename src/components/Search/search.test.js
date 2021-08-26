import React from "react";
import renderer from "react-test-renderer";
import Search from "./Search.js";
import { searchGuests } from "./data";

it("renders Search correctly", () => {
  const tree = renderer.create(<Search searchGuests={searchGuests} />).toJSON();
  expect(tree).toMatchSnapshot();
});
