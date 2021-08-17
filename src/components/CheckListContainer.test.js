import React from "react";
import renderer from "react-test-renderer";
import ChecklistContainer from "./CheckListContainer";

const data = [
  {
    text: "Go to Checklist",
    title: "Cat Adoption Checklist",
    link: "denemeLink",
  },
  {
    text: "Go to Checklist",
    title: "Cat Adoption Checklist",
    link: "denemeLink",
  },
  {
    text: "Go to Checklist",
    title: "Cat Adoption Checklist",
    link: "denemeLink",
  },
];

it("checklist container renders correctly", () => {
  const tree = renderer.create(<ChecklistContainer data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
