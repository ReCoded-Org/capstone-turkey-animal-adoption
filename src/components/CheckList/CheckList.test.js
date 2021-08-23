import CheckList from "./CheckList";
import React from "react";
import renderer from "react-test-renderer";

const data = {
  text: "Go to Checklist",
  title: "Cat Adoption Checklist",
  link: "denemeLink",
};

it("checlist renders correctly", () => {
  const tree = renderer
    .create(<CheckList text={data.text} title={data.title} link={data.link} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
