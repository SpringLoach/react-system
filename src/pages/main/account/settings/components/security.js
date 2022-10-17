import React, { memo } from "react";

import { List, Button } from "antd";

const data = [
  {
    title: "账户密码",
    description: "当前密码强度：强",
    btnText: "修改",
  },
  {
    title: "密保手机",
    description: "已绑定手机：186****0681",
    btnText: "修改",
  },
  {
    title: "密保问题",
    description: "未设置密保问题，密保问题可有效保护账户安全",
    btnText: "设置",
  },
  {
    title: "备用邮箱",
    description: "已绑定邮箱：10*******qq.com",
    btnText: "修改",
  },
  {
    title: "MFA 设备",
    description: "未绑定 MFA 设备，绑定后，可以进行二次确认",
    btnText: "绑定",
  },
];

export default memo(() => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item extra={<Button type="link">{item.btnText}</Button>}>
          <List.Item.Meta
            title={<span>{item.title}</span>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
});
