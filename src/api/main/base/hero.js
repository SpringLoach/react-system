import request from "@/api/request";

// 查询列表
export function getList(data) {
  return request({
    method: "post",
    url: "/hero/list",
    data,
    public: true,
  });
}
