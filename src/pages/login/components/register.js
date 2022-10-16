import React, { memo } from "react";
import { Form, Input, Button, message } from "antd";

import { register } from "@/api/login/login";

export default memo((props) => {
  const onFinish = async (values) => {
    console.log("onFinish:", values);
    const { username, password } = values;
    const { data } = await register({
      name: username,
      password,
    });
    if (!data) return;
    props.backToLogin();
    message.success(`注册账号成功`);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 5 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          label="账号"
          rules={[{ required: true, message: "请输入账号!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="确认密码"
          dependencies={["password"]}
          validateTrigger="onBlur"
          rules={[
            { required: true, message: "请输入确认密码!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("两次输入的密码不一致"));
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-btn">
          注册
        </Button>
        <span
          className="link"
          onClick={() => {
            props.backToLogin();
          }}
        >
          登录
        </span>
      </Form>
    </div>
  );
});
