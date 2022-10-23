import store from "@/store";
import { changeUserInfoAction } from "@/pages/login/store/actionCreators";

const loginInit = function () {
  const data = window.sessionStorage.getItem("userInfo");
  if (!data) return;
  store.dispatch(changeUserInfoAction(JSON.parse(data)));
};

const logOut = function () {
  window.sessionStorage.clear();
  const data = {
    id: null,
    name: undefined,
    token: null,
    nickname: undefined,
    avatar: undefined,
  };
  store.dispatch(changeUserInfoAction(data));
};

export { loginInit, logOut };
