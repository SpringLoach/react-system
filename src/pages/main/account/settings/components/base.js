import React, { memo, useEffect, useState } from "react";
import { getProvinceList, getCityList } from "@/api/main/account/settings";
import { getInfo, setInfo } from "@/api/main/account/settings";

import { Form, Input, Select, Button, Upload, Tooltip, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { BaseWrapper, Left, Right, ImgWrapper } from "./base.style";

const AvatarView = memo((props) => {
  return (
    <>
      <div>头像</div>
      <ImgWrapper>
        <img src={props.url} alt="" />
      </ImgWrapper>
      <Upload showUploadList={false}>
        <div>
          <Tooltip title="图片不会保存到服务器，请设置表单的头像地址">
            <Button style={{ marginBottom: "20px" }}>
              <UploadOutlined />
              更换头像
            </Button>
          </Tooltip>
        </div>
      </Upload>
    </>
  );
});

export default memo((props) => {
  const { showMode } = props;

  const [form] = Form.useForm();
  const [avatarUrl, setAvatarUrl] = useState(
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F26%2F20201226211434_03e58.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669134347&t=007b2f08d71bb0e807880b8ba8d793e6"
  );
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);
  useEffect(() => {
    initProvinceList();
    initUserInfo();
  }, []);

  const initProvinceList = async () => {
    const { data } = await getProvinceList();
    if (!data) return;
    setProvinceList(data);
  };
  const initUserInfo = async () => {
    let { data } = await getInfo();
    if (!data) return;
    data = {
      ...data,
      pre: data.telephone.split("-")[0],
      phone: data.telephone.split("-")[1],
    };
    setAvatarUrl(data.avatar);
    form.setFieldsValue(data);
  };

  const onSelectProvince = async (e) => {
    form.setFieldsValue({
      area: undefined,
    });
    const { data } = await getCityList({ province: e });
    if (!data) return;
    setCityList(data);
  };

  const onAvatarChange = ({ target }) => {
    const result =
      target.value ||
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F26%2F20201226211434_03e58.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669134347&t=007b2f08d71bb0e807880b8ba8d793e6";
    setAvatarUrl(result);
  };

  const onFinish = async (values) => {
    const { pre, phone } = values;
    values.telephone = `${pre}-${phone}`;
    delete values.phoneSet;
    delete values.pre;
    delete values.phone;
    const { data } = await setInfo(values);
    if (!data) return;
    message.success("编辑成功！");
  };

  return (
    <BaseWrapper
      flexDirection={showMode === "large" ? "row" : "column-reverse"}
    >
      <Left>
        <Form
          form={form}
          name="basic"
          layout="vertical"
          requiredMark={false}
          initialValues={{
            country: "中国",
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
                message: "请输入您的邮箱!",
              },
              {
                type: "email",
                message: "邮箱格式不正确!",
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
                message: "请输入您的昵称!",
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
                message: "请输入您的头像地址!",
              },
            ]}
          >
            <Input placeholder="请输入" allowClear onChange={onAvatarChange} />
          </Form.Item>
          <Form.Item
            label="个人简介"
            name="profile"
            style={{ maxWidth: "448px" }}
            rules={[
              {
                required: true,
                message: "请输入个人简介!",
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
                message: "请输入您的国家或地区!",
              },
            ]}
          >
            <Select placeholder="请选择" allowClear>
              <Select.Option value="中国">中国</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            className="province"
            label="所在省市"
            style={{ margin: 0 }}
          >
            <Input.Group compact>
              <Form.Item
                name="province"
                style={{ width: "216px", marginRight: "10px" }}
                rules={[{ required: true, message: "请输入您的所在省!" }]}
              >
                <Select
                  placeholder="请选择"
                  allowClear
                  onSelect={onSelectProvince}
                >
                  {provinceList.map((item) => (
                    <Select.Option key={item.name}>{item.name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name="area"
                style={{ width: "216px" }}
                rules={[{ required: true, message: "请输入您的所在城市!" }]}
              >
                <Select placeholder="请选择" allowClear>
                  {cityList.map((item) => (
                    <Select.Option key={item.name}>{item.name}</Select.Option>
                  ))}
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
                message: "请输入您的街道地址!",
              },
            ]}
          >
            <Input placeholder="请输入" allowClear />
          </Form.Item>
          <Form.Item
            name="phoneSet"
            dependencies={["pre", "phone"]}
            label="联系电话"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!getFieldValue("pre") || !getFieldValue("phone")) {
                    return Promise.reject(new Error("请输入您的联系电话"));
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Group compact>
              <Form.Item
                name="pre"
                style={{ width: "72px", margin: "0 10px 0 0" }}
              >
                <Input />
              </Form.Item>
              <Form.Item name="phone" style={{ width: "214px", margin: 0 }}>
                <Input />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              更新基本信息
            </Button>
          </Form.Item>
        </Form>
      </Left>
      <Right>
        <AvatarView url={avatarUrl} />
      </Right>
    </BaseWrapper>
  );
});
