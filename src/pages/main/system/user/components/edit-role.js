import React, { memo, useEffect, useState } from 'react'

import { Button, Modal, Form, Input, Select } from "antd"

export default memo(() => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const onFinish = () => { }

  useEffect(() => {
    form.setFieldsValue({
      name: 'Hello world!',
      nickname: 'male',
      role: '3'
    });
  }, [])
  return (
    <>
      <Button
        type="link"
        onClick={showModal}
      >
        修改角色
      </Button>
      <Modal title="修改角色" open={open} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="账号"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="姓名"
            name="nickname"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="角色"
            name="role"
            rules={[
              {
                required: true,
                message: 'Please select your role!',
              },
            ]}
          >
            <Select placeholder="请选择角色">
              <Select.Option value="1">超级管理员</Select.Option>
              <Select.Option value="2">会员</Select.Option>
              <Select.Option value="3">游客</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
})