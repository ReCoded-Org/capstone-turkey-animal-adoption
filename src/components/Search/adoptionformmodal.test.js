import React from "react";
import renderer from "react-test-renderer";
import AdoptionFormModal from "./AdoptionFormModal.js";

it("renders AdoptionFormModal correctly", () => {
  const tree = renderer.create(<AdoptionFormModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
