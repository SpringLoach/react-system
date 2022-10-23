import React, { memo, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeUserInfoAction } from "@/pages/main/store/actionCreators";
import { UserContext } from "@/components/config-component";
import { logOut } from "@/utils/user";

import { Dropdown, Menu, Badge, Button, Input } from "antd";
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
import Notification from "./components/notification";
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
          <NavLink exact to="/account/settings">
            <SettingOutlined {...MenuIconAttr} />
            个人设置
          </NavLink>
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

  const [showInput, setShowInput] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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
        <SearchOutlined
          className="tip-item"
          onClick={() => {
            setShowInput(!showInput);
          }}
        />
        <Input
          placeholder="search something..."
          className={showInput ? "show-input" : "hidden-input"}
          onBlur={() => {
            setShowInput(false);
          }}
        />
        <QuestionCircleOutlined className="tip-item" />
        <div className="notify">
          <Badge
            count={12}
            className="tip-item"
            onClick={() => {
              setShowNotification(true);
            }}
          >
            <BellOutlined />
          </Badge>
          {showNotification && (
            <Notification
              closeNotification={() => {
                setShowNotification(false);
              }}
            />
          )}
        </div>
        <Dropdown overlay={menu} placement="bottomRight">
          <div style={{ marginLeft: "10px" }}>
            <img
              className="avatar-img"
              src={
                userInfo.avatar ||
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F26%2F20201226211434_03e58.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669134347&t=007b2f08d71bb0e807880b8ba8d793e6"
              }
              alt=""
            />
            <span className="nickname">{userInfo.nickname || "匿名用户"}</span>
          </div>
        </Dropdown>
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
