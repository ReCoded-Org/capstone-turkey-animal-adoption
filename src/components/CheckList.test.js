import CheckList from "./CheckList";
import React from "react";
import renderer from "react-test-renderer";


it("renders correctly", () => {
  const tree = renderer
    .create(
      <CheckList text={data.text} title={data.title} link={data.link}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});