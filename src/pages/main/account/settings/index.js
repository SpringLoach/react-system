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
  const [initConfig, setInitConfig] = useState({
    showMode: 'large',
    mode: 'vertical',
    wrapFlex: 'row',
    leftClassName: 'left',
  });

  const renderChildren = () => {
    switch (currentKey) {
      case "base":
        return <BaseView showMode={initConfig.showMode} />;
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
        if (initConfig.showMode !== 'large') {
          setInitConfig({
            showMode: 'large',
            mode: 'vertical',
            wrapFlex: 'row',
            leftClassName: 'left',
          })
        }
      }
      // window.innerWidth
      if (offsetWidth < 850) {
        if (initConfig.showMode !== 'small') {
          setInitConfig({
            showMode: 'small',
            mode: 'horizontal',
            wrapFlex: 'column',
            leftClassName: 'small-left',
          })
        }
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
  }, [dom.current, initConfig, currentKey]);

  const onClick = ({ key }) => {
    setCurrentKey(key);
  };

  return (
    <ConentWrapper>
      <Card bodyStyle={{ padding: "16px 0" }}>
        <div ref={dom} style={{ display: "flex", flexDirection: initConfig.wrapFlex }}>
          <div className={initConfig.leftClassName}>
            <Menu items={items} mode={initConfig.mode} selectedKeys={[currentKey]} onClick={onClick} />
          </div>
          <div className="right">
            <h2>{items.find((item) => item.key === currentKey).label}</h2>
            {renderChildren()}
          </div>
        </div>
      </Card>
    </ConentWrapper >
  );
});
