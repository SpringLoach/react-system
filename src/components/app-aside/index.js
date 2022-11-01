import React, { memo, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import logo from "@/assets/img/logo.svg";

import {
  FileSearchOutlined,
  ReadOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
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
  getItem("基础使用", "/base", <ReadOutlined />, [
    getItem("静态表格", "/base/biology"),
    getItem("动态表格", "/base/hero"),
    getItem("分步表单", "/base/step-form"),
  ]),
  getItem("我的", "/account", <UserOutlined />, [
    getItem("个人中心", "/account/center"),
    getItem("个人设置", "/account/settings"),
    getItem("页脚设置", "/account/footer-config"),
  ]),
  getItem("系统管理", "/system", <SettingOutlined />, [
    getItem("用户管理", "/system/user"),
  ]),
  getItem("趣事鹿", "/expand", <SettingOutlined />, [getItem("eat", "/eat")]),
  getItem("文档", "2", <FileSearchOutlined />, [
    getItem("antd文档", "https://ant.design/components/overview-cn/"),
    getItem("logo设计", "https://logomakr.com/"),
    getItem("z4a图床", "https://z4a.net/"),
    getItem("CodeTop", "https://codetop.cc/login"),
  ]),
];

const items2 = [
  {
    label: "基础使用",
    key: "base",
    icon: <ReadOutlined />,
    children: [
      {
        label: "静态表格",
        key: "/base/biology",
      },
      {
        label: "动态表格",
        key: "/base/hero",
      },
      {
        label: "分步表单",
        key: "/base/step-form",
      },
    ],
  },
  {
    label: "我的",
    key: "account",
    icon: <UserOutlined />,
    children: [
      {
        label: "个人设置",
        key: "/account/settings",
      },
    ],
  },
];

export default memo(() => {
  // 获取 redux 中的状态、dispatch方法
  const { collapsed } = useSelector((state) => {
    return {
      collapsed: state.getIn(["main", "collapsed"]),
    };
  }, shallowEqual);

  const history = useHistory();
  const { pathname } = history.location;
  const [currentKey, setCurrentKey] = useState(pathname);
  const [openKey, setOpenKey] = useState("/" + pathname.split("/")[1]);

  const clickMenuItem = ({ key }) => {
    if (key.indexOf("http") !== -1) {
      window.open(key);
      return;
    }
    if (["/eat"].includes(key)) {
      window.open(`${window.location.href.split("#")[0]}#` + key);
      return;
    }
    history.push(key);
    setCurrentKey(key);
  };

  const onOpenChange = (e) => {
    setOpenKey(e[e.length - 1]);
  };

  return (
    <>
      <LogoWrapper justifyContent={collapsed ? "center" : "initial"}>
        <img className="App-logo" src={logo} alt="" />
        {!collapsed ? <span className="App-title">react-system</span> : null}
      </LogoWrapper>
      <Menu
        openKeys={[openKey]}
        selectedKeys={[currentKey]}
        mode="inline"
        theme="dark"
        items={items}
        onClick={clickMenuItem}
        onOpenChange={onOpenChange}
      />
    </>
  );
});
