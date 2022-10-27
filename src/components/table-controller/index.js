import React, { memo, useState } from 'react'

import { Dropdown, Menu, Tooltip } from "antd"
import { ColumnHeightOutlined, RedoOutlined, SettingOutlined } from "@ant-design/icons"
import { ConentWrapper } from "./style"

export default memo((props) => {
  const { changeExtraAttr } = props
  const [showColumnSettings, setShowColumnSettings] = useState(false);

  const resize = ({ key }) => {
    changeExtraAttr({
      size: key
    })
  }
  const menu = (
    <Menu
      onClick={resize}
      items={[
        {
          key: 'default',
          label: '默认',
        },
        {
          key: 'middle',
          label: '中等',
        },
        {
          key: 'small',
          label: '紧凑',
        },
      ]}
    />
  );

  const dos = () => {
    changeExtraAttr({
      size: 'small'
    })
  }

  const ColumnSettings = memo(() => {
    return <span onClick={dos}>123</span>
  })

  return (
    <ConentWrapper>
      <Tooltip title="刷新">
        <RedoOutlined />
      </Tooltip>
      <div className='column-settings'>
        <Tooltip title="列设置">
          <SettingOutlined onClick={() => { setShowColumnSettings(true) }} />
        </Tooltip>
        {showColumnSettings && <ColumnSettings />}
      </div>
      <Dropdown overlay={menu} trigger={['click']} placement="bottom">
        <Tooltip title="密度">
          <ColumnHeightOutlined />
        </Tooltip>
      </Dropdown>
    </ConentWrapper>
  )
})
