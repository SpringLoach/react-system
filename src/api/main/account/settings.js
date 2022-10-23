import request from "@/api/request";

// 省市-查询省份列表
export function getProvinceList() {
  return request({
    method: "get",
    url: "/province/list",
  });
}

// 省市-根据省份查询市区列表
export function getCityList(data) {
  return request({
    method: "get",
    url: "/province/city",
    params: data,
  });
}

// 获取用户详细信息
export function getInfo() {
  return request({
    method: "get",
    url: "/users/getInfo",
  });
}

// 动态处理用户信息（无-编辑，有-添加）
export function setInfo(data) {
  return request({
    method: "post",
    url: "/users/setInfo",
    data,
  });
}
