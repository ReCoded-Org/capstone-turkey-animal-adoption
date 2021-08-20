import React from "react";
import renderer from "react-test-renderer";
import ChecklistContainer from "./CheckListContainer";

const data = [
  {
    text: "Go to Checklist",
    title: "Cat Adoption Checklist",
    link: "denemeLink",
    id: "id1",
  },
  {
    text: "Go to Checklist",
    title: "Cat Adoption Checklist",
    link: "denemeLink",
    id: "id2",
  },
  {
    text: "Go to Checklist",
    title: "Cat Adoption Checklist",
    link: "denemeLink",
    id: "id3",
  },
];

it("checklist container renders correctly", () => {
  const tree = renderer.create(<ChecklistContainer data={data} />).toJSON();
  expect(tree).toMatchSnapshot();
});
