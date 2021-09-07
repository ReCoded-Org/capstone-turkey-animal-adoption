import React from "react";
import renderer from "react-test-renderer";
import Search from "./Search.js";
import { searchGuests } from "./data";
import store from "../../store/store";
import { Provider } from "react-redux";

it("renders Search correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Search searchGuests={searchGuests} />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
