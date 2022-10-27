import React, { memo, useMemo, useState } from 'react'

import {
  Form,
  Row,
  Col,
  Input,
  Button,
  Select,
  DatePicker
} from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons"

import { ConentWrapper } from "./style"
const { RangePicker } = DatePicker;

export default memo((props) => {
  const { form, onFinish, onReset, searchForm } = props
  const [expand, setExpand] = useState(false);

  const spacesNum = useMemo(() => {
    if (!expand) return [];
    const res = searchForm.length % 3;
    switch (res) {
      case 2:
        return []
      case 1:
        return [0]
      case 0:
        return [0, 0]
      default:
        break;
    }
  }, [expand])

  return (
    <ConentWrapper>
      <Form
        style={{ marginTop: '20px' }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        form={form}
        onFinish={onFinish}
      >
        <Row className="form-item-row" gutter={16}>
          {searchForm.map((item, index) => {
            let control = '';
            if (item.type === 'input') {
              control = <Input placeholder={item.placeholder} />
            }
            if (item.type === 'select') {
              control = (
                <Select placeholder={item.placeholder} allowClear>
                  {item.options.map(o => {
                    return <Select.Option key={o.value} value={o.value}>{o.label}</Select.Option>
                  })}
                </Select>
              )
            }
            if (item.type === 'time') {
              control = (
                <RangePicker
                  format={item.format || 'YYYY-MM-DD'}
                  placeholder={item.placeholder || ['开始时间', '结束时间']} />
              )
            }

            if (!expand && index > 1) {
              return null
            }
            return (
              <Col className="gutter-row" key={item.name} span={8}>
                <Form.Item label={item.label} name={item.name}>
                  {control}
                </Form.Item>
              </Col>
            )
          })}
          {spacesNum.map((space, index) => <Col className="gutter-row" key={index} span={8}></Col>)}

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
            {expand
              ? <span className='expand-btn' onClick={() => { setExpand(false) }}>收起</span>
              : <span className='expand-btn' onClick={() => { setExpand(true) }}>展开</span>}
            <UpOutlined className={["expand-icon", (expand ? "" : "rotate")].join(" ")} />
          </Col>
        </Row>
      </Form>
    </ConentWrapper>
  )
})