import React, { memo, useState, createRef, useLayoutEffect } from "react";

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
  const [showMode, setShowMode] = useState("large");
  const [initConfig, setInitConfig] = useState({
    mode: 'vertical',
    wrapFlex: 'column',
  });

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

  const dom = createRef();

  const resize = () => {
    requestAnimationFrame(() => {
      if (!dom.current) {
        return;
      }
      const { offsetWidth } = dom.current;
      if (offsetWidth > 850) {
        console.log(1, offsetWidth);
        console.log(showMode !== 'large');
        showMode !== 'large' && setShowMode('large') && setInitConfig({
          mode: 'vertical',
          wrapFlex: 'column',
        })
      }
      // window.innerWidth
      if (offsetWidth < 850) {
        console.log(2, offsetWidth);
        showMode !== 'small' && setShowMode('small') && setInitConfig({
          mode: 'horizontal',
          wrapFlex: 'inherit',
        })
      }
    });
  };

  useLayoutEffect(() => {
    if (dom.current) {
      window.addEventListener('resize', resize);
      resize();
    }
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [dom.current, showMode]);

  const onClick = ({ key }) => {
    setCurrentKey(key);
  };

  return (
    <ConentWrapper>
      <Card bodyStyle={{ padding: "16px 0" }}>
        <div ref={dom} style={{ display: "flex", flexDirection: initConfig.wrapFlex }}>
          <div className="left">
            <Menu items={items} mode={initConfig.mode} selectedKeys={[currentKey]} onClick={onClick} />
          </div>
          <div className="right">
            <h2>{items.find((item) => item.key === currentKey).label}</h2>
            {renderChildren()}
          </div>
        </div>
      </Card>
    </ConentWrapper>
  );
});
