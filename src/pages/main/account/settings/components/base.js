import React, { memo } from "react";

import { Form, Input, Select, Button, Upload, Tooltip } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BaseWrapper, Left, Right, ImgWrapper } from "./base.style"

const AvatarView = memo(() => {
  return <>
    <div>头像</div>
    <ImgWrapper>
      <img src='https://joeschmoe.io/api/v1/random' alt="avatar" />
    </ImgWrapper>
    <Upload showUploadList={false}>
      <div>
        <Tooltip title="图片不会保存到服务器，请设置表单的头像地址">
          <Button style={{ marginBottom: '20px' }}>
            <UploadOutlined />
            更换头像
          </Button>
        </Tooltip>
      </div>
    </Upload>
  </>
})

export default memo((props) => {
  const { showMode } = props;

  const onFinish = (values) => {
    delete values.phoneSet
    console.log('Success:', values);
  };

  return (
    <BaseWrapper flexDirection={showMode === 'large' ? 'row' : 'column-reverse'}>
      <Left>
        <Form
          name="basic"
          layout="vertical"
          requiredMark={false}
          initialValues={{
            country: "cn"
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="邮箱"
            name="email"
            style={{ maxWidth: "328px" }}
            rules={[
              {
                required: true,
                message: '请输入您的邮箱!',
              },
              {
                type: 'email',
                message: '邮箱格式不正确!',
              },
            ]}
          >
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item
            label="昵称"
            name="nickname"
            style={{ maxWidth: "328px" }}
            rules={[
              {
                required: true,
                message: '请输入您的昵称!',
              },
            ]}
          >
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item
            label="头像地址"
            name="avatar"
            style={{ maxWidth: "328px" }}
            rules={[
              {
                required: true,
                message: '请输入您的头像地址!',
              },
            ]}
          >
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item
            label="个人简介"
            name="profile"
            style={{ maxWidth: "448px" }}
            rules={[
              {
                required: true,
                message: '请输入个人简介!',
              },
            ]}
          >
            <Input.TextArea placeholder="个人简介" autoSize={{ minRows: 3 }} />
          </Form.Item>
          <Form.Item
            label="国家/地区"
            name="country"
            style={{ maxWidth: "216px" }}
            rules={[
              {
                required: true,
                message: '请输入您的国家或地区!',
              },
            ]}
          >
            <Select placeholder="请选择" allowClear>
              <Select.Option value="cn">中国</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="province" label="所在省市" style={{ margin: 0 }}>
            <Input.Group compact>
              <Form.Item
                name='province'
                style={{ width: "216px", marginRight: "10px" }}
                rules={[{ required: true, message: '请输入您的所在省!' }]}
              >
                <Select placeholder="请选择" allowClear>
                  <Select.Option value="cn">中国</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name='area'
                style={{ width: "216px" }}
                rules={[{ required: true, message: '请输入您的所在城市!' }]}
              >
                <Select placeholder="请选择" allowClear>
                  <Select.Option value="cn">中国</Select.Option>
                </Select>
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            label="街道地址"
            name="address"
            style={{ maxWidth: "328px" }}
            rules={[
              {
                required: true,
                message: '请输入您的街道地址!',
              },
            ]}
          >
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item name='phoneSet' dependencies={['pre', 'phone']} label="联系电话" rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                console.log(222, getFieldValue('pre'), getFieldValue('phone'));
                if (!getFieldValue('pre') || !getFieldValue('phone')) {
                  return Promise.reject(new Error('请输入您的联系电话'));
                }
                return Promise.resolve();
              },
            }),
          ]}>
            <Input.Group compact>
              <Form.Item
                name='pre'
                style={{ width: "72px", margin: "0 10px 0 0" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='phone'
                style={{ width: "214px", margin: 0 }}
              >
                <Input />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">更新基本信息</Button>
          </Form.Item>
        </Form>
      </Left>
      <Right>
        <AvatarView />
      </Right>
    </BaseWrapper>
  );
});
