import React from "react";
import renderer from "react-test-renderer";
import GuestContainer from "./GuestContainer";
import { guests, guestsTitle } from "../data/data";

it("renders correctly", () => {
  const tree = renderer
    .create(<GuestContainer guests={guests} guestsTitle={guestsTitle} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
