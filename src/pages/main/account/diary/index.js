import React, { memo } from 'react'

import { Row, Col, Card } from "antd"
import Main from "./components/main"
import { PageWrapper } from "./style"

export default memo(() => {
  return (
    <PageWrapper>
      <Row gutter={8}>
        <Col lg={17} sm={24} xs={24}>
          <Card className='left-card'>
            <Main />
          </Card>
        </Col>
        <Col lg={7} sm={24} xs={24}>
          <Card className='right-card'></Card>
        </Col>
      </Row>
    </PageWrapper>
  )
})