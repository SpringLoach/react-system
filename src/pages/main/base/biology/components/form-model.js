import React, { memo, useState } from "react";

import {
  Button,
  Drawer,
  Form,
  Input,
  Radio,
  Space,
  Tooltip,
  Upload,
} from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { FormModelWrapper } from "./form-model-style";

export default memo((props) => {
  const [open, setOpen] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [defaultFileList, setDefaultFileList] = useState([]);
  const { model } = props;
  const record = props.record && JSON.parse(props.record);
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
    // 编辑时
    if (model === "edit") {
      const { id, name, author, cover, progress, region, theme, type } = record;
      form.setFieldsValue({
        id,
        name,
        author,
        cover,
        progress,
        region,
        theme,
        type,
      });
      setFileList([
        {
          uid: "1",
          name: "image.png",
          status: "done",
          url: cover,
        },
      ]);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const Footer = memo(() => {
    return (
      <Space>
        <Tooltip title="数据不会入库，故没有进行修改">
          <Button type="primary" onClick={onClose}>
            保存
          </Button>
        </Tooltip>
        <Button onClick={onClose}>取消</Button>
      </Space>
    );
  });

  return (
    <FormModelWrapper>
      {props.model === "create" && (
        <Button type="primary" className="create-btn" onClick={showDrawer}>
          创建记录
        </Button>
      )}
      {props.model === "edit" && (
        <Button type="link" onClick={showDrawer}>
          <EditOutlined />
          编辑
        </Button>
      )}
      <Drawer
        title={model === "create" ? "创建记录" : "编辑记录"}
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        footer={<Footer />}
        footerStyle={{ textAlign: "right" }}
      >
        <Form
          name="basic"
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item label="作品名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="作者" name="author">
            <Input />
          </Form.Item>
          <Form.Item label="作品图片" valuePropName="cover">
            <Upload
              action="/upload.do"
              listType="picture-card"
              fileList={fileList}
              maxCount={1}
              onChange={onChange}
            >
              {fileList.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>上传</div>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="进度" name="progress">
            <Radio.Group>
              <Radio value={1}> 连载 </Radio>
              <Radio value={2}> 完结 </Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="类型" name="type">
            <Radio.Group>
              <Radio.Button value={1}>漫画</Radio.Button>
              <Radio.Button value={2}>动漫</Radio.Button>
              <Radio.Button value={3}>漫画、动漫</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="地域" name="region">
            <Radio.Group>
              <Radio.Button value={1}> 日本 </Radio.Button>
              <Radio.Button value={2}> 港台 </Radio.Button>
              <Radio.Button value={3}> 内地 </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Drawer>
    </FormModelWrapper>
  );
});
