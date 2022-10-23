import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  userInfo: {
    id: null,
    name: undefined,
    token: null,
    nickname: undefined,
    avatar: undefined,
  },
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USER_INFO:
      return state.set("userInfo", action.userInfo);
    default:
      return state;
  }
}

export default reducer;
