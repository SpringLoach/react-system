import * as actionTypes from "./constants";

const defaultState = {
  userInfo: {
    name: "demo",
  },
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_INFO:
      return { ...state, userInfo: action.userInfo };
    default:
      return state;
  }
}

export default reducer;
