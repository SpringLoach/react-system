import React, { memo, useState } from 'react'

import { Card, Menu } from 'antd'
import Chart from './components/chart'
import Poster from './components/poster'
import { ConentWrapper } from "./style"

const items = [
  { label: "图表", key: "chart" }, // 菜单项务必填写 key
  { label: "海报", key: "poster" },
];

export default memo(() => {
  const [currentKey, setCurrentKey] = useState("chart");

  const renderChildren = () => {
    switch (currentKey) {
      case "chart":
        return <Chart />;
      case "poster":
        return <Poster />;
      default:
        return null;
    }
  };

  const onClick = ({ key }) => {
    setCurrentKey(key);
  };

  return (
    <ConentWrapper>
      <Card bodyStyle={{ padding: "16px 0" }}>
        <div style={{ display: "flex" }}>
          <div className="left">
            <Menu items={items} selectedKeys={[currentKey]} onClick={onClick} />
          </div>
          <div className="right">
            <h2>{items.find((item) => item.key === currentKey).label}</h2>
            {renderChildren()}
          </div>
        </div>
      </Card>
    </ConentWrapper>
  )
})
