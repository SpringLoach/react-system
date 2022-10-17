import React, { memo, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  changeUserInfoAction,
  changeLanguageAction,
} from "@/pages/main/store/actionCreators";
import { UserContext } from "@/App";

import { logOut } from "@/utils/user";
import { Dropdown, Menu, Badge, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  FontSizeOutlined,
} from "@ant-design/icons";
import { HeaderWrapper } from "./style";

const MenuIconAttr = {
  style: {
    marginRight: "10px",
  },
};
const MenuTipAttr = {
  style: {
    display: "inline-block",
    marginRight: "8px",
    fontSize: "12px",
    transform: "scale(0.8) translateY(1px)",
  },
};

const menu = (
  <Menu
    style={{ width: "140px" }}
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <UserOutlined {...MenuIconAttr} />
            个人中心
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            <SettingOutlined {...MenuIconAttr} />
            个人设置
          </a>
        ),
      },
      {
        type: "divider",
      },
      {
        key: "3",
        label: (
          <NavLink exact to="/" onClick={logOut}>
            <LogoutOutlined {...MenuIconAttr} />
            退出登录
          </NavLink>
        ),
      },
    ]}
  />
);
const langMenu = (props) => {
  const { lang, func } = props;

  const langMap = [
    {
      lang: "zh_CN",
      abbr: "CN",
      label: "简体中文",
    },
    {
      lang: "zh_HK",
      abbr: "HK",
      label: "繁體中文",
    },
    {
      lang: "en_US",
      abbr: "US",
      label: "English",
    },
  ];

  return (
    <Menu
      style={{ width: "120px" }}
      selectedKeys={[lang]}
      onClick={(e) => {
        func(e.key);
      }}
      items={langMap.map((item) => {
        return {
          key: item.lang,
          label: (
            <div>
              <span {...MenuTipAttr}>{item.abbr}</span>
              {item.label}
            </div>
          ),
        };
      })}
    />
  );
};

export default memo(() => {
  // 获取 redux 中的状态、dispatch方法
  const { userInfo, collapsed } = useSelector((state) => {
    return {
      userInfo: state.getIn(["login", "userInfo"]),
      collapsed: state.getIn(["main", "collapsed"]),
    };
  }, shallowEqual);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <Button
        className="collapsed-btn"
        onClick={() => {
          dispatch(changeUserInfoAction(!collapsed));
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div className="header-right">
        <SearchOutlined className="tip-item" />
        <QuestionCircleOutlined className="tip-item" />
        <Badge count={88} className="tip-item">
          <BellOutlined />
        </Badge>
        <Dropdown overlay={menu} placement="bottomRight">
          <div style={{ marginLeft: "10px" }}>
            <img className="avator-img" src={userInfo.avator} alt="" />
            <span className="nickname">{userInfo.nickname}</span>
          </div>
        </Dropdown>
        {/* <FontSizeOutlined
                onClick={() => {
                  value.func();
                }}
              /> */}
        <UserContext.Consumer>
          {(value) => {
            return (
              <Dropdown overlay={langMenu(value)} placement="bottomRight">
                <div style={{ padding: "0 18px" }}>
                  <FontSizeOutlined />
                </div>
              </Dropdown>
            );
          }}
        </UserContext.Consumer>
      </div>
    </HeaderWrapper>
  );
});
