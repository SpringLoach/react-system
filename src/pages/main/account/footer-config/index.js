import React, { memo } from 'react'

import { Card, Switch } from "antd"
import { FooterConfigWrapper, PageWrapper } from "./style"

export default memo(() => {
  return (
    <div>
      <FooterConfigWrapper>
        <h2>页脚设置</h2>
        <p>可以自定义页脚的提示语，如果设置多个，将随机选择一个提示语进行展示。</p>
      </FooterConfigWrapper>
      <PageWrapper>
        <Card>
          <div>
            <span>展示页脚&nbsp;&nbsp;</span>
            <Switch defaultChecked />
          </div>
        </Card>
      </PageWrapper>
    </div>
  )
})