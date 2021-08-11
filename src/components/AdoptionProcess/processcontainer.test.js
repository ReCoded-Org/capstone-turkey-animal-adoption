import React from "react";
import renderer from "react-test-renderer";
import ProcessContainer from "./ProcessContainer.js";
import {adoptionProcess,sectionTitle} from "../data/data"

it("renders correctly", () => {
  const tree = renderer.create(
    <ProcessContainer 
      adoptionProcess={adoptionProcess} 
      sectionTitle={sectionTitle}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});