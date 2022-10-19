import React, { memo } from "react";
import moment from 'moment';

import { Card, Steps, Form, Input, Select, Button, DatePicker, Divider } from "antd";
import { TopTipWrapper, PageWrapper, FromWrapper } from "./style"

export default memo(() => {
  return (
    <>
      <TopTipWrapper>
        <h2>分步表单</h2>
        <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
      </TopTipWrapper>
      <PageWrapper>
        <Card className="card">
          <Steps current={1} className="steps">
            <Steps.Step title="填写参团信息" />
            <Steps.Step title="确认参团信息" />
            <Steps.Step title="完成" />
          </Steps>
          <FromWrapper>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              layout="vertical"
            >
              <Form.Item
                label="旅游团队"
                name="team"
                rules={[
                  {
                    required: true,
                    message: '请选择旅游团队!',
                  },
                ]}
              >
                <Select placeholder="请选择旅游团队" >
                  <Select.Option value="1">包机票游云南</Select.Option>
                  <Select.Option value="2">5日舟山人文之旅</Select.Option>
                  <Select.Option value="3">游黄山西海大峡谷</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="报名者姓名"
                name="applicant"
                rules={[
                  {
                    required: true,
                    message: '请输入报名者姓名!',
                  },
                ]}
              >
                <Input placeholder="请输入报名者姓名" />
              </Form.Item>
              <Form.Item
                label="参团方式"
                name="way"
                rules={[
                  {
                    required: true,
                    message: '请选择参团人数!',
                  },
                ]}
              >
                <Select placeholder="请选择参团方式" >
                  <Select.Option value="1">单人游</Select.Option>
                  <Select.Option value="2">双人游</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item className="contact-way" label="联系方式" required style={{ margin: 0 }}>
                <Input.Group compact>
                  <Form.Item
                    name='pre'
                    style={{ width: "110px", marginRight: '6px' }}
                    rules={[
                      { required: true, message: '请选择联系方式!', }
                    ]}
                  >
                    <Select placeholder="请选择" >
                      <Select.Option value="1">手机号</Select.Option>
                      <Select.Option value="2">微信</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name='phone'
                    style={{ width: "200px" }}
                    rules={[
                      { required: true, message: '请输入联系号码/账号!', }
                    ]}
                  >
                    <Input placeholder="请输入联系号码 / 账号" />
                  </Form.Item>
                </Input.Group>
              </Form.Item>
              <Form.Item
                label="参团时间"
                name="time"
                rules={[
                  {
                    required: true,
                    message: '请选择参团时间!',
                  },
                ]}
              >
                <DatePicker disabledDate={(current) => {
                  console.log(123, current > moment().add(3, 'days'))
                  return current < moment().endOf('day') || current > moment().add(7, 'days');
                }} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">下一步</Button>
              </Form.Item>
            </Form>
          </FromWrapper>
          <Divider />
          <div>
            <h3>说明</h3>
            <h4>单人参团须知</h4>
            <p>
              如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
            </p>
            <h4>多人参团须知</h4>
            <p>
              如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
            </p>
          </div>
        </Card>
      </PageWrapper>
    </>
  );
});
