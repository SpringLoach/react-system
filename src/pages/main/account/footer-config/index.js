import React, { memo, useState } from 'react'

import { Card, Switch, Radio, Button, Input, message } from "antd"
import { FooterConfigWrapper, PageWrapper, ColorItem, AddBtn } from "./style"

export default memo(() => {
  const [tipList, setTipList] = useState(['赢得别人注意的最好方法', 'c', 'd', 'a']);

  const addTip = () => {
    if (tipList.length >= 8) {
      message.info('可使用的提示语最多不超过8个');
      return
    }
    const target = [...tipList]
    target.push('')
    setTipList(target)
  }

  const deleteTip = (index) => {
    if (tipList.length === 1) {
      message.info('至少需要添加一个提示语');
      return
    }
    const target = [...tipList]
    target.splice(index, 1)
    setTipList(target)
  }

  const save = () => {
    message.info('todo');
  }
  return (
    <div>
      <FooterConfigWrapper>
        <h2>页脚设置</h2>
        <p>可以自定义页脚的提示语，如果设置多个，将随机选择一个提示语进行展示。</p>
      </FooterConfigWrapper>
      <PageWrapper>
        <Card>
          <div className='control-row'>
            <span className='label'>展示页脚：</span>
            <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
          </div>
          <div className='control-row'>
            <span className='label'>文字颜色：</span>
            <Radio.Group>
              <Radio value={1}><ColorItem color="rgba(0,0,0,0.45);" /></Radio>
              <Radio value={2}><ColorItem color="#faad14" /></Radio>
              <Radio value={3}><ColorItem color="#52c41a" /></Radio>
              <Radio value={4}><ColorItem color="#e6f7ff" /></Radio>
              <Radio value={5}><ColorItem color="#fcbdbf" /></Radio>
            </Radio.Group>
          </div>
          <div className='control-row'>
            <span className='label'>提示语：</span>
            <AddBtn onClick={addTip}>新增提示语</AddBtn>
            <span style={{ color: '#d3d3d3' }}>(最多添加8项)</span>
          </div>
          {
            tipList.map((item, index) => {
              return (
                <div className='input-row' key={index}>
                  <Input placeholder="请输入提示语" value={item} />
                  <Button type="link" danger onClick={() => { deleteTip(index) }}>删除</Button>
                </div>
              )
            })
          }
          <Button type="primary" className='sure-btn' onClick={save}>保存</Button>
        </Card>
      </PageWrapper>
    </div>
  )
})