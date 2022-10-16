import * as actionTypes from "./constants";

export const changeUserInfoAction = (res) => ({
  type: actionTypes.CHANGE_COLLAPSED,
  collapsed: res,
});