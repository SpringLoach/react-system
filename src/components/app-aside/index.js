import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "@/assets/img/logo.svg";

import { FileSearchOutlined, ReadOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import LogoWrapper from "./style";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("基础使用", "1", <ReadOutlined />, [
    getItem("静态表格", "/base/biology"),
    getItem("动态表格", "/base/hero"),
  ]),
  getItem("文档", "2", <FileSearchOutlined />, [
    getItem("antdv文档", "https://ant.design/components/overview-cn/"),
    getItem("logo设计", "https://logomakr.com/"),
    getItem("z4a图传", "https://z4a.net/"),
    getItem("CodeTop", "https://codetop.cc/login"),
  ]),
];

export default memo(() => {
  // 获取 redux 中的状态、dispatch方法
  const { collapsed } = useSelector((state) => {
    return {
      collapsed: state.getIn(["main", "collapsed"]),
    };
  }, shallowEqual);

  const history = useHistory();

  const clickMenuItem = ({ key }) => {
    if (key.indexOf("http") !== -1) {
      window.open(key);
      return;
    }
    history.push(key);
  };

  return (
    <>
      <LogoWrapper justifyContent={collapsed ? "center" : "initial"}>
        <img className="App-logo" src={logo} alt="" />
        {!collapsed ? <span className="App-title">react-system</span> : null}
      </LogoWrapper>
      <Menu
        defaultSelectedKeys={["1-1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={clickMenuItem}
      />
    </>
  );
});
