import * as actionTypes from "./constants";

import { getloginInfo } from "@/api/login/login.js";

import { message } from "antd";

const changeUserInfoAction = (res) => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo: res.result,
});

export const handleUserLogin = () => {
  const hide = message.loading("登陆中", 0);
  return async (dispatch) => {
    const res = await getloginInfo();
    dispatch(changeUserInfoAction(res));
    hide();
  };
};
