import React, { memo, useState } from 'react'

import { Popconfirm, Input, Dropdown, Menu } from "antd"
import { MinusCircleOutlined, PlusCircleOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { PageWrapper, ConfigItemWrapper } from "./style"

const ParagraphConfig = memo(({ item }) => {
  return (
    <Input.TextArea rows={4} placeholder="请输入段落内容" autoSize={{ minRows: 4 }} defaultValue={item.value} />
  )
})

const menu = (
  <Menu>
    <Menu.Item><div style={{ fontSize: '16px', padding: '2px 15px 2px 15px' }}>段落</div></Menu.Item>
    <Menu.Divider />
    <Menu.Item><div style={{ fontSize: '16px', padding: '2px 15px 2px 15px' }}>图片</div></Menu.Item>
  </Menu>
);

export default memo(() => {
  const [config, setConfig] = useState([
    {
      type: 'paragraph',
      value: '',
      title: '段落'
    }
  ]);

  const confirm = () => { }
  const cancel = () => { }
  return (
    <PageWrapper>
      {config.map((item, index) => {
        const map = {
          'paragraph': <div><ParagraphConfig item={item} /></div>,
          'img': 234
        }
        return (
          <ConfigItemWrapper key={index}>
            <div className='config-top'>
              <div className='config-title'>{item.title}</div>
              <div id='config-btn-group'>
                <Popconfirm
                  getPopupContainer={() => document.getElementById('config-btn-group')}
                  title="确认删除?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="是"
                  cancelText="否"
                >
                  <MinusCircleOutlined className="dec-icon" style={{ fontSize: '20px' }} />
                </Popconfirm>
                <Dropdown overlay={menu}>
                  <PlusCircleOutlined className="inc-icon" style={{ fontSize: '20px' }} />
                </Dropdown>
                {/*  */}
              </div>
            </div>
            <div>{map[item.type]}</div>
          </ConfigItemWrapper>
        )
      })}
    </PageWrapper>
  )
})
