import React, { memo, useEffect, useState } from "react";
import { getList } from "@/api/main/base/hero";

import {
  Card,
  Form,
  Row,
  Col,
  Input,
  Button,
  Table,
  Tag,
  Pagination,
  Image,
} from "antd";

import { ConentWrapper, HeaderWrapper } from "./style";

const columns = [
  {
    title: "头像",
    dataIndex: "faceImg",
    key: "faceImg",
    align: "center",
    width: "100px",
    render: (_, record) => (
      <>
        <Image width={80} src={_} preview={{ src: record.heroImg }} />
      </>
    ),
  },
  {
    title: "英雄名称",
    dataIndex: "cname",
    key: "cname",
    align: "center",
  },
  {
    title: "英雄称号",
    dataIndex: "title",
    key: "title",
    align: "center",
  },
  {
    title: "定位",
    dataIndex: "occupation",
    key: "occupation",
    align: "center",
  },
  {
    title: "皮肤",
    dataIndex: "skinName",
    key: "skinName",
    align: "center",
    width: "20%",
    render: (_) => (
      <>
        {_.split("|").map((item) => (
          <Tag color="blue" key={item}>
            {item}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "操作",
    dataIndex: "operate",
    key: "operate",
    align: "center",
    width: "120px",
    render: (_, record) => (
      <>
        <Button
          type="link"
          onClick={() => {
            window.open(record.infoUrl);
          }}
        >
          查看详情
        </Button>
      </>
    ),
  },
];

export default memo(() => {
  const [dataList, setDataList] = useState();
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState({
    pageNum: 1,
    pageSize: 10,
  });
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    search();
  }, [query]);

  const search = async () => {
    setLoading(true);
    const { data } = await getList(query);
    setLoading(false);
    if (!data) return;
    setDataList(data.data);
    setTotal(data.total);
  };
  const changePagination = (page, pageSize) => {
    setQuery({
      ...query,
      pageNum: page,
      pageSize: pageSize,
    });
  };
  const onFinish = (value) => {
    console.log(value);
    setQuery({
      ...query,
      ...value,
    });
  };
  const onReset = () => {
    form.resetFields();
    setQuery({
      pageNum: 1,
      pageSize: 10,
    });
  };

  const Header = memo(() => {
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
              <Form.Item label="英雄名称" name="cname">
                <Input placeholder="请输入英雄名称" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item label="英雄称号" name="title">
                <Input placeholder="请输入英雄称号" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item label="定位" name="occupation">
                <Input placeholder="请输入定位" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="form-item-row" gutter={16}>
            <Col className="gutter-row" span={8}>
              <Form.Item label="皮肤" name="skinName">
                <Input placeholder="请输入皮肤" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}></Col>
            <Col className="btn-wrap" span={8}>
              <Button
                className="first-btn"
                type="primary"
                htmlType="submit"
                loading={loading}
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
    );
  });
  const Main = memo(() => {
    return (
      <>
        <Table
          dataSource={dataList}
          columns={columns}
          rowKey="cname"
          pagination={false}
          loading={loading}
        />
        <Pagination
          style={{ marginTop: "20px", textAlign: "right" }}
          total={total}
          current={query.pageNum}
          pageSize={query.pageSize}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `共 ${total} 条数据`}
          onChange={changePagination}
        />
      </>
    );
  });
  return (
    <ConentWrapper>
      <Card title="王者荣耀英雄列表">
        <Header />
        <Main />
      </Card>
    </ConentWrapper>
  );
});
