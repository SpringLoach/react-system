import React, { memo } from "react";

import { List, Button } from "antd";
import {
  AlipayOutlined,
  DingdingOutlined,
  TaobaoOutlined,
} from "@ant-design/icons";
import { BindingWrapper } from "../style";

const data = [
  {
    title: "绑定淘宝",
    description: "当前未绑定淘宝账号",
    avatar: <TaobaoOutlined className="taobao" />,
  },
  {
    title: "绑定支付宝",
    description: "当前未绑定支付宝账号",
    avatar: <AlipayOutlined className="alipay" />,
  },
  {
    title: "绑定钉钉",
    description: "当前未绑定钉钉账号",
    avatar: <DingdingOutlined className="dingding" />,
  },
];

export default memo(() => {
  return (
    <BindingWrapper>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item extra={<Button type="link">绑定</Button>}>
            <List.Item.Meta
              avatar={item.avatar}
              title={<span>{item.title}</span>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </BindingWrapper>
  );
});
