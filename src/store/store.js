import { createStore } from "redux";
import user from "./reducers/usersReducers";

const store = createStore(
  user,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
