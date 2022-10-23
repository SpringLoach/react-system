import axios from "axios";
import { message } from "antd";
import store from "@/store";

import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use(
  (config) => {
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    const { token = undefined } = store.getState().getIn(["login", "userInfo"]);
    if (token) {
      config.headers.authorization = token;
    }
    if (!config.public && !token) {
      window.location.hash = "/base";
    }
    // 3.params/data序列化的操作
    // console.log("config", config);
    return config;
  },
  (err) => {}
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        default:
          console.log("其他错误信息");
      }
      message.error(err.response.data);
    }
    return err;
  }
);

export default instance;
