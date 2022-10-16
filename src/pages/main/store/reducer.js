import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  collapsed: false,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_COLLAPSED:
      return state.set("collapsed", action.collapsed);
    default:
      return state;
  }
}

export default reducer;
