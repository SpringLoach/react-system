import request from "../request";

// 登录
export function getloginInfo(data) {
  return request({
    method: "post",
    url: "/login",
    data,
    public: true,
  });
}

// 注册
export function register(data) {
  return request({
    method: "post",
    url: "/users",
    data,
    public: true,
  });
}
