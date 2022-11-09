import React, { memo } from 'react'

import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default memo(() => {
  return (
    <div>
      <Title level={4}>介绍</Title>
      <Paragraph>
        以前也做过博客、小程序和简易版App这些个人项目，但那个时候还不会写接口，所以这些网页用的都是静态数据，总觉得欠缺了什么。趁着空余时间，
        又学习了很多新的技术，感觉能够试着做一个<Text strong>完整的项目</Text>了，也可以借此机会熟悉相关的技术。于是，便有了这个项目。
      </Paragraph>
      <Paragraph>
        目标是独立完成该项目的设计、页面开发、表结构设计、接口编写、部署。该项目前端基于 <Text code>React</Text> 开发，采用 <Text code>Ant Design</Text> 作为布局框架；后端使用 <Text code>Node.js</Text>，并采用 <Text code>Koa</Text> 作为服务器框架。
        数据库选择的是 <Text code>MySQL</Text>。
      </Paragraph>
      <Paragraph>
        因为时间有限的关系，所以前期选择了几个较为基础的页面，去实现一些通用的功能。后面会加上一些前端的特点功能，像是数据可视化、生成海报、高级搜索组件等。
        在未来，考虑注入某些方面的业务，来锻炼自己的产品思维。
      </Paragraph>
      <Title level={4}>展望</Title>
      <Paragraph>- 添加标语模块，可用于自定义页脚的标语</Paragraph>
      <Paragraph>- 将 “饭点吃什么” 功能移植到该项目</Paragraph>
      <Paragraph>- 添加用户列表模块</Paragraph>
      <Paragraph>- 添加日记模块，做几个模板</Paragraph>
      <Paragraph>- 添加计划模块，可以添加以周/月/年作为周期的计划，并记录完成情况</Paragraph>
      <Paragraph>- 建分支添加功能：海报、二维码、pdf、echart、图片上传、excel导入导出</Paragraph>
      <Title level={4}>参考</Title>
      <Paragraph>
        项目的某些模块在页面设计方面等方面，参考了其他优秀的开源项目，有几个页面直接参照 Ant Design Pro 进行了还原。
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            <Link href="https://github.com/ant-design/ant-design-pro" target="_blank">Ant Design Pro</Link>
          </li>
          <li>
            <Link href="https://github.com/buqiyuan/vue3-antd-admin" target="_blank">vue3-antd-admin</Link>
          </li>
          <li>
            <Link href="#account/center">Other</Link>
          </li>
        </ul>
      </Paragraph>
    </div>
  )
})