import request from "../request";

// 添加
export function add(data) {
  return request({
    method: "post",
    url: "/blog/add",
    data,
  });
}

// 查询
export function query(data) {
  return request({
    method: "get",
    url: "/blog/query",
    params: data,
  });
}

// 修改
export function edit(data) {
  return request({
    method: "post",
    url: "/blog/edit",
    data,
  });
}

// 查询列表
export function list(data) {
  return request({
    method: "post",
    url: "/blog/list",
    data,
  });
}

// 查看权限
export function viewRight() {
  return request({
    method: "get",
    url: "/blog/viewRight",
  });
}

// 编辑权限
export function right(data) {
  return request({
    method: "post",
    url: "/blog/right",
    data,
  });
}
