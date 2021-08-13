import React from "react";
import renderer from "react-test-renderer";
import ChecklistContainer from "./CheckListContainer";

const data = [ 
    {text:"hello",
    title:"yoyoyo",
    link:"denemeLink"
  }, {text:"hello",
  title:"yoyoyo",
  link:"ikiucdort"
  }, {text:"hello",
  title:"yoyoyo",
  link:"ikiucdort"
  }, {text:"hello",
  title:"yoyoyo",
  link:"ikiucdort"
  }
  ]

it("renders correctly", () => {
  const tree = renderer
    .create(
      <ChecklistContainer data={data} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});