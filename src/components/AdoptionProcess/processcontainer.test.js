import React from "react";
import renderer from "react-test-renderer";
import ProcessContainer from "./ProcessContainer.js";
import { adoptionProcessItems, adoptionProcessTitle } from "../data/data";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ProcessContainer
        adoptionProcessItems={adoptionProcessItems}
        adoptionProcessTitle={adoptionProcessTitle}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
