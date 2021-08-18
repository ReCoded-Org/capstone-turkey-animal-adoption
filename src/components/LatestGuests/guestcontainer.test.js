import React from "react";
import renderer from "react-test-renderer";
import GuestContainer from "./GuestContainer";
import { latestAddedGuests } from "./data";

it("renders Guest Container correctly", () => {
  const tree = renderer
    .create(<GuestContainer latestAddedGuests={latestAddedGuests} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
