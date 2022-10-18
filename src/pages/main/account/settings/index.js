import React, { memo, useState } from "react";

import BaseView from "./components/base";
import BindingView from "./components/binding";
import NotificationView from "./components/notification";
import SecurityView from "./components/security";
import { Card, Menu } from "antd";
import { ConentWrapper } from "./style";

const items = [
  { label: "基本设置", key: "base" }, // 菜单项务必填写 key
  { label: "安全设置", key: "security" },
  { label: "账号绑定", key: "binding" },
  { label: "新消息通知", key: "notification" },
];

export default memo(() => {
  const [currentKey, setCurrentKey] = useState("base");

  const renderChildren = () => {
    switch (currentKey) {
      case "base":
        return <BaseView />;
      case "security":
        return <SecurityView />;
      case "binding":
        return <BindingView />;
      case "notification":
        return <NotificationView />;
      default:
        return null;
    }
  };

  const onClick = ({ key }) => {
    console.log(key);
    setCurrentKey(key);
  };
  return (
    <ConentWrapper>
      <Card bodyStyle={{ padding: "16px 0", display: "flex" }}>
        <div className="left">
          <Menu items={items} selectedKeys={[currentKey]} onClick={onClick} />
        </div>
        <div className="right">
          <h2>{items.find((item) => item.key === currentKey).label}</h2>
          {renderChildren()}
        </div>
      </Card>
    </ConentWrapper>
  );
});
