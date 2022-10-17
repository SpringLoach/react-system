import React, { memo } from "react";

import { List, Switch } from "antd";

const data = [
  {
    title: "账户密码",
    description: "其他用户的消息将以站内信的形式通知",
  },
  {
    title: "系统消息",
    description: "系统消息将以站内信的形式通知",
  },
  {
    title: "待办任务",
    description: "待办任务将以站内信的形式通知",
  },
];

export default memo(() => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          extra={
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              defaultChecked
            />
          }
        >
          <List.Item.Meta
            title={<span>{item.title}</span>}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
});
