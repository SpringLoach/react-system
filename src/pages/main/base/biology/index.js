import React, { memo } from "react";
import { dataSource } from "./help/biology-data";
import { themeMap, progressMap, typeMap, regionMap } from "./help/map";

import {
  Alert,
  Col,
  Row,
  Form,
  Input,
  Select,
  Table,
  Button,
  message,
} from "antd";
import Content from "@/components/app-content";
import FormModel from "./components/form-model";
import { HeaderWrapper, AlertStyle } from "./style";

const tip = "脚印：路由映射的组织、插槽的实现、UI组件添加样式";

const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "作品名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "作品图片",
    dataIndex: "cover",
    key: "cover",
    render: (_) => (
      <>
        <img style={{ height: "80px" }} src={_} alt="" />
      </>
    ),
  },
  {
    title: "题材",
    dataIndex: "theme",
    key: "theme",
    render: (_, { theme }) => (
      <>
        {theme.map((item, index) => (
          <span key={item}>
            {themeMap[item]}
            {index < theme.length - 1 ? "、" : null}
          </span>
        ))}
      </>
    ),
  },
  {
    title: "进度",
    dataIndex: "progress",
    key: "progress",
    render: (_) => <>{progressMap[_]}</>,
  },
  {
    title: "作者",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "类型",
    dataIndex: "type",
    key: "type",
    render: (_) => <>{typeMap[_]}</>,
  },
  {
    title: "地域",
    dataIndex: "region",
    key: "region",
    render: (_) => <>{regionMap[_]}</>,
  },
  {
    title: "操作",
    dataIndex: "operate",
    key: "operate",
    render: (_, record) => (
      <>
        <FormModel model="edit" record={JSON.stringify(record)} />
      </>
    ),
  },
];

export default memo(() => {
  const info = () => {
    message.info("空功能：前端查询的意义不大");
  };

  const header = (
    <HeaderWrapper>
      <Alert
        style={AlertStyle}
        message="固定数据的静态页面"
        description={tip}
        type="info"
        closeText="Close Now"
      />
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
        <Row className="form-item-row" gutter={16}>
          <Col className="gutter-row" span={8}>
            <Form.Item label="作品名称" name="name">
              <Input placeholder="请输入作品名称" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="作者" name="author">
              <Input placeholder="请输入作者名称" />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="题材" name="theme">
              <Select placeholder="请选择题材" allowClear>
                {Object.keys(themeMap).map((item) => {
                  return (
                    <Select.Option value={item} key={item}>
                      {themeMap[item]}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row className="form-item-row" gutter={16}>
          <Col className="gutter-row" span={8}>
            <Form.Item label="进度" name="progress">
              <Select placeholder="请选择进度" allowClear>
                <Select.Option value="1">连载</Select.Option>
                <Select.Option value="2">完结</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item label="地域" name="region">
              <Select placeholder="请选择地域" allowClear>
                <Select.Option value="1">日本</Select.Option>
                <Select.Option value="2">港台</Select.Option>
                <Select.Option value="3">内地</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="btn-wrap" span={8}>
            <Button className="first-btn" type="primary" onClick={info}>
              搜索
            </Button>
            <Button className="second-btn" onClick={info}>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    </HeaderWrapper>
  );
  const main = (
    <>
      <FormModel model="create" />
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
  return (
    <div>
      <Content topContent={header} mainContent={main}></Content>
    </div>
  );
});
