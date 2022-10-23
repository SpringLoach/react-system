import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeUserInfoAction,
} from "@/pages/login/store/actionCreators";
import { NavLink } from "react-router-dom";
import { getloginInfo } from "@/api/login/login";

import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Register from "./components/register";

import { PageWrapper, Center } from "./style";

const login = memo((props) => {
  // redux
  const dispatch = useDispatch();

  // state
  const [mode, setMode] = useState("login");

  const onFinish = async (values) => {
    console.log("Success:", values);
    const { username, password } = values;
    const { data } = await getloginInfo({
      name: username,
      password,
    });
    if (!data) return;
    dispatch(changeUserInfoAction(data));
    window.sessionStorage.setItem("userInfo", JSON.stringify(data));
    props.history.push("/base");
    message.success(`您好，${data.nickname || '匿名用户'}，欢迎回来`);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <PageWrapper>
      <div className="wrapper"></div>
      <div className="logo"></div>
      <Center>
        <div className="slogan">
          <div>
            春鳅
            <br />
            自研系统欢迎您！
          </div>
          <div
            style={{
              width: "256px",
              height: "8px",
              background: "rgb(255, 255, 255)",
              marginTop: "17px",
            }}
          ></div>
        </div>
        <div className="form">
          <div className="form-title">{mode === "login" ? "登录" : "注册"}</div>

          {mode === "login" ? (
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={{
                username: "test",
                password: "test123",
              }}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "请输入账号!" }]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="手机号/邮箱"
                />
              </Form.Item>
              <Form.Item
                style={{ marginBottom: "2px" }}
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="密码"
                />
              </Form.Item>
              <div style={{ textAlign: "right", marginTop: "2px" }}>
                <span className="link">忘记密码?</span>
              </div>
              <Button type="primary" htmlType="submit" className="login-btn">
                登录
              </Button>
              {/* <NavLink exact to="base">
                <span className="link">注册账号</span>
              </NavLink> */}
              <span
                className="link"
                onClick={() => {
                  setMode("register");
                }}
              >
                注册账号
              </span>
            </Form>
          ) : (
            <Register
              backToLogin={() => {
                setMode("login");
              }}
            />
          )}
        </div>
      </Center>
      <div className="copyright">
        Copyright @ 2022 HuNan SpringLoach diy technology co., LTD. All rights
        reserved
      </div>
    </PageWrapper>
  );
});

export default login;
