import React, { memo } from 'react'

import {
  Card,
  Form,
  Row,
  Col,
  Input,
  Button,
} from "antd";

import { HeaderWrapper } from "./style";

export default memo(() => {
  const [form] = Form.useForm();

  const onFinish = () => { }
  const onReset = () => { }
  return (
    <HeaderWrapper>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={onFinish}
      >
        <Row className="form-item-row" gutter={16}>
          <Col className="gutter-row" span={8}>
            <Form.Item label="角色名称" name="cname">
              <Input placeholder="请选择角色" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="姓名" name="title">
              <Input placeholder="请输入姓名" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="创建时间" name="occupation">
              <Input placeholder="请选择创建时间" />
            </Form.Item>
          </Col>
        </Row>
        <Row className="form-item-row" gutter={16}>
          <Col className="gutter-row" span={8}>
            <Form.Item label="性别" name="skinName">
              <Input placeholder="请输入性别" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}></Col>
          <Col className="btn-wrap" span={8}>
            <Button
              className="first-btn"
              type="primary"
              htmlType="submit"
            >
              搜索
            </Button>
            <Button className="second-btn" onClick={onReset}>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    </HeaderWrapper>
  )
})
