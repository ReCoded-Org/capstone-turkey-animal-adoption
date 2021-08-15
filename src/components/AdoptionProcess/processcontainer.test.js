import React, { useEffect, useState } from "react";
import renderer from "react-test-renderer";
import ProcessContainer from "./ProcessContainer.js";
import {adoptionProcess} from "./data"

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ProcessContainer
        adoptionProcess={adoptionProcess}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
