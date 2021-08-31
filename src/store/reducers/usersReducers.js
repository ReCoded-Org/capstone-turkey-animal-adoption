import { SIGN_IN, LOG_OUT } from "../actions/actionConst";
const initialState = {
  user: null,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload };
    case LOG_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
}

export default usersReducer;
