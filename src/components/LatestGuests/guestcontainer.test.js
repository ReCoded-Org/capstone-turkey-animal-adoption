import React from "react";
import renderer from "react-test-renderer";
import GuestContainer from "./GuestContainer";
import { latestAddedGuests, latestGuestsTitle } from "../../data/data"

it("renders correctly", () => {
  const tree = renderer.create(
    <GuestContainer 
      latestAddedGuests={latestAddedGuests} 
      latestGuestsTitle={latestGuestsTitle}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});