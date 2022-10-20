import React, { memo, useState } from "react";
import moment from 'moment';
import { getEnumLabel } from "@/utils/common"

import { Card, Steps, Form, Input, Select, Button, DatePicker, Divider, Alert, Descriptions, Result } from "antd";
import { TopTipWrapper, PageWrapper, FromWrapper, ThirdStepContentWrapper } from "./style"

const JOIN_WAY = [
  {
    label: '单人游',
    value: "1"
  }, {
    label: '双人游',
    value: "2"
  }
]
const PROJECT_LIST = [
  {
    label: '包机票游云南',
    value: "1"
  }, {
    label: '5日舟山人文之旅',
    value: "2"
  }, {
    label: '游黄山西海大峡谷',
    value: "3"
  }
]

export default memo(() => {
  const [form] = Form.useForm();
  const [codeForm] = Form.useForm();
  const [formData, setFormData] = useState({});
  const [current, setCurrent] = useState(0);

  const sureFirstStep = async () => {
    const res = await form.validateFields().catch(() => { })
    if (!res) return
    res.time = moment(res.time).format('YYYY-MM-DD')
    setFormData(res)
    setCurrent(1)
  }

  const backFirstStep = () => {
    setCurrent(0)
  }

  const sureSecondStep = async () => {
    const res = await codeForm.validateFields().catch(() => { })
    if (!res) return
    setCurrent(2)
  }

  const continueFill = () => {
    form.resetFields()
    codeForm.resetFields()
    setFormData({})
    setCurrent(0)
  }

  const showContent = () => {
    switch (current) {
      case 0:
        return firstStepContent
      // return ThirdStepContent
      case 1:
        return secondStepConent
      case 2:
        return ThirdStepContent
      default:
        return null;
    }
  }

  const firstStepContent = (
    <Form
      name="basic"
      form={form}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      layout="vertical"
    >
      <Form.Item
        label="旅游项目"
        name="project"
        rules={[
          {
            required: true,
            message: '请选择旅游项目!',
          },
        ]}
      >
        <Select placeholder="请选择旅游项目" >
          {
            PROJECT_LIST.map(item => {
              return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
            })
          }
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
          {
            JOIN_WAY.map(item => {
              return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
            })
          }
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
            name='account'
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
          return current < moment().endOf('day') || current > moment().add(7, 'days');
        }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={sureFirstStep}>下一步</Button>
      </Form.Item>
    </Form>
  )

  const secondStepConent = (
    <div style={{ marginTop: '50px' }}>
      <Alert message="系统已经将验证码发送到您的手机号/微信，请将其填至“验证码”栏内。" type="info" showIcon closable />
      <Descriptions
        bordered
        column={1}
        style={{ marginTop: '24px' }}
      >
        <Descriptions.Item label="旅游项目">{getEnumLabel(PROJECT_LIST, formData.project)}</Descriptions.Item>
        <Descriptions.Item label="报名者">{formData.applicant}</Descriptions.Item>
        <Descriptions.Item label="参团方式">{getEnumLabel(JOIN_WAY, formData.way)}</Descriptions.Item>
        <Descriptions.Item label="参团时间">{formData.time}</Descriptions.Item>
        <Descriptions.Item label="联系账号">{formData.account}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Form
        name="code"
        form={codeForm}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          label="验证码"
          name="code"
          rules={[
            {
              required: true,
              message: '请输入验证码!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button onClick={backFirstStep} style={{ marginRight: '6px' }}>上一步</Button>
          <Button type="primary" onClick={sureSecondStep}>下一步</Button>
        </Form.Item>
      </Form>
    </div>
  )

  const ThirdStepContent = (
    <ThirdStepContentWrapper>
      <Result
        status="success"
        title="报名成功"
        subTitle="您的队伍导游将会在这两天联系您，请留意"
        extra={[
          <Button type="primary" onClick={continueFill} key="continue">
            继续报名
          </Button>,
          <Button key="detail">查看详情</Button>,
        ]}
      />
      <Descriptions column={1} className="result-description">
        <Descriptions.Item label="旅游项目">{getEnumLabel(PROJECT_LIST, formData.project)}</Descriptions.Item>
        <Descriptions.Item label="报名者">{formData.applicant}</Descriptions.Item>
        <Descriptions.Item label="参团方式">{getEnumLabel(JOIN_WAY, formData.way)}</Descriptions.Item>
        <Descriptions.Item label="参团时间">{formData.time}</Descriptions.Item>
      </Descriptions>
    </ThirdStepContentWrapper>
  )

  return (
    <>
      <TopTipWrapper>
        <h2>分步表单</h2>
        <p>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</p>
      </TopTipWrapper>
      <PageWrapper>
        <Card className="card">
          <Steps current={current} className="steps">
            <Steps.Step title="填写参团信息" />
            <Steps.Step title="确认参团信息" />
            <Steps.Step title="完成" />
          </Steps>
          <FromWrapper>
            {showContent()}
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
