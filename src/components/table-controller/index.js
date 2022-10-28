import React, { memo, useState, useEffect } from 'react'

import { Dropdown, Menu, Tooltip, Checkbox, Button } from "antd"
import { ColumnHeightOutlined, RedoOutlined, SettingOutlined } from "@ant-design/icons"
import { ConentWrapper, ColumnSettingsWrapper } from "./style"

export default memo((props) => {
  const { extraAttr, changeExtraAttr } = props
  const [copyExtraAttr, setCopyExtraAttr] = useState(extraAttr);
  const [showColumnSettings, setShowColumnSettings] = useState(false);

  useEffect(() => {
    function func(e) {
      const target = document.getElementsByClassName("column-settings-wrapper")[0];
      if (!e.path.includes(target)) {
        setShowColumnSettings(false);
      }
    }
    document.addEventListener("mousedown", func);
    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  const resize = ({ key }) => {
    changeExtraAttr({
      ...extraAttr,
      size: key
    })
  }
  const menu = (
    <Menu
      onClick={resize}
      selectedKeys={[copyExtraAttr.size]}
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

  const changeCustom = ({ target }, key) => {
    let value = target.checked
    if (key === 'rowSelection') {
      value = target.checked ? {} : undefined
    }
    setCopyExtraAttr({
      ...copyExtraAttr,
      [key]: value
    })
  }

  const ColumnSettings = memo(() => {
    return (
      <ColumnSettingsWrapper className='column-settings-wrapper'>
        <div className='checkbox-group-row'>
          <Checkbox checked={copyExtraAttr.rowSelection} onChange={(event) => { changeCustom(event, 'rowSelection') }}>复选</Checkbox>
          <Checkbox checked={copyExtraAttr.showHeader} onChange={(event) => { changeCustom(event, 'showHeader') }}>表头</Checkbox>
          <Checkbox checked={copyExtraAttr.bordered} onChange={(event) => { changeCustom(event, 'bordered') }}>边框</Checkbox>
        </div>
        <Button type="link" onClick={() => { changeExtraAttr(copyExtraAttr) }}>确定</Button>
      </ColumnSettingsWrapper>
    )
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
