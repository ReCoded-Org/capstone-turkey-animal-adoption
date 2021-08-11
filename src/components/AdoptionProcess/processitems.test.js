import React from "react";
import renderer from "react-test-renderer";
import ProcessItems from "./ProcessItems.js";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ProcessItems
        key={process.id}
        img={process.img}
        text={process.text}
        firstDescription={process.firstDescription}
        secondDescription={process.secondDescription}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
