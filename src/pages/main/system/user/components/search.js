import React, { memo } from 'react'

import {
  Form,
} from "antd";
import SearchForm from "@/components/search-form"

import { HeaderWrapper } from "./style";

const searchForm = [
  {
    type: 'input',
    label: '角色名称',
    name: 'role',
    placeholder: '请选择角色',
  }, {
    type: 'input',
    label: '姓名',
    name: 'name',
    placeholder: '请输入姓名',
  }, {
    type: 'time',
    label: '创建时间',
    name: 'time',
  }, {
    type: 'select',
    label: '性别',
    name: 'sex',
    placeholder: '请选择性别',
    options: [
      {
        value: 'male',
        label: '男'
      }, {
        value: 'female',
        label: '女'
      },
    ]
  },
]

export default memo(() => {
  // 这里的form可以直接考虑从更上一层传递下来，因为查询/清空还涉及到页码等
  const [form] = Form.useForm();

  const onFinish = (e) => {
    console.log(e)
  }
  const onReset = () => {
    form.resetFields();
  }

  return (
    <HeaderWrapper>
      <SearchForm form={form} searchForm={searchForm} onFinish={onFinish} onReset={onReset} />
    </HeaderWrapper>
  )
})
