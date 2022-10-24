import React, { memo } from 'react'

import { Card, List, BackTop } from 'antd';
import { PageWrapper } from "./reference-style"

const data = [
  {
    title: '技术笔记',
    subDescription: '作者进行技术总结的地方，知识点较广',
    time: '几秒前',
    link: 'https://github.com/SpringLoach/power'
  },
  {
    title: 'Vue',
    subDescription: '用于构建用户界面的 JavaScript 框架，提供了声明式的、组件化的编程模型',
    time: '2 小时前',
    link: 'https://cn.vuejs.org/guide/introduction.html'
  },
  {
    title: 'Ant Design Vue',
    subDescription: '为 Web 应用提供了丰富的基础 UI 组件',
    time: '2 小时前',
    link: 'https://1x.antdv.com/docs/vue/introduce-cn/'
  },
  {
    title: 'Elememt-plus',
    subDescription: '基于 Vue 3，面向设计师和开发者的组件库',
    time: '2 小时前',
    link: 'https://element-plus.gitee.io/zh-CN/component/button.html'
  },
  {
    title: 'Vant',
    subDescription: '轻量的移动端组件库，官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本',
    time: '2 小时前',
    link: 'https://vant-contrib.gitee.io/vant/#/zh-CN'
  },
  {
    title: 'pinia',
    subDescription: '新一代的 vuex，可以更好地适配 vue3，有更好的 typescript 支持',
    time: '2 小时前',
    link: 'https://pinia.web3doc.top/introduction.html'
  },
  {
    title: 'vue-cropper',
    subDescription: '图片裁剪组件',
    time: '2 小时前',
    link: 'https://github.com/xyxiao001/vue-cropper'
  },
  {
    title: 'vue-i18n',
    subDescription: '国际化插件，它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中',
    time: '2 小时前',
    link: 'https://kazupon.github.io/vue-i18n/zh/guide/formatting.html'
  },
  {
    title: '微信小程序',
    subDescription: '微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验',
    time: '6 小时前',
    link: 'https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html'
  },
  {
    title: '微信公众平台',
    subDescription: '管理小程序的开发权限，可以申请发布等',
    time: '6 小时前',
    link: 'https://mp.weixin.qq.com/'
  },
  {
    title: 'uni-app',
    subDescription: '一套代码，可编译到多个平台使用',
    time: '6 小时前',
    link: 'https://uniapp.dcloud.net.cn/case.html#'
  },
  {
    title: 'iView Weapp',
    subDescription: '一套高质量的 微信小程序 UI 组件库',
    time: '6 小时前',
    link: 'https://weapp.iviewui.com/docs/guide/start'
  },
  {
    title: 'React',
    subDescription: '用于构建用户界面的 JavaScript 库',
    time: '4 小时前',
    link: 'https://react.docschina.org/docs/hello-world.html'
  },
  {
    title: 'React Redux',
    subDescription: '专门用于做状态管理的js库',
    time: '4 小时前',
    link: 'https://react-redux.js.org/introduction/getting-started'
  },
  {
    title: 'Ant Design',
    subDescription: 'antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品',
    time: '4 小时前',
    link: 'https://ant.design/docs/react/introduce-cn'
  },
  {
    title: 'Node.js',
    subDescription: 'Node.js 是一个开源、跨平台的 JavaScript 运行时环境',
    time: '4 小时前',
    link: 'https://nodejs.org/zh-cn/docs/'
  },
  {
    title: 'Koa',
    subDescription: 'Node.js 的服务器框架',
    time: '4 小时前',
    link: 'https://koa.bootcss.com/'
  },
  {
    title: 'echart',
    subDescription: '一个基于 JavaScript 的开源可视化图表库',
    time: '2 小时前',
    link: 'https://echarts.apache.org/zh/index.html'
  },
  {
    title: 'html2canvas',
    subDescription: '将网页内容扫描，作为图像输出',
    time: '2 小时前',
    link: 'https://html2canvas.hertzen.com/'
  },
  {
    title: 'jsPDF',
    subDescription: '前端生成PDF',
    time: '2 小时前',
    link: 'https://github.com/parallax/jsPDF'
  },
  {
    title: 'qrcode',
    subDescription: '前端生成二维码',
    time: '2 小时前',
    link: 'https://github.com/soldair/node-qrcode'
  },
  {
    title: 'less、sass',
    subDescription: 'CSS 预处理语言',
    time: '2 小时前',
    link: 'https://less.bootcss.com/'
  },
  {
    title: 'git、svn',
    subDescription: '版本控制系統',
    time: '2 小时前',
    link: 'https://git-scm.com/docs/'
  },
  {
    title: 'markdown',
    subDescription: '一款很适合程序员的轻量级标记语言',
    time: '2 小时前',
    link: 'https://github.com/SpringLoach/origin-2021'
  },
];

export default memo(() => {

  const openWeb = (link) => {
    window.open(link)
  }

  return (
    <PageWrapper>
      <BackTop target={() => document.getElementsByClassName('global-content')[0]} />
      <List
        grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
        dataSource={data}
        renderItem={item => (
          <List.Item onClick={() => { openWeb(item.link) }}>
            <Card
              hoverable
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png" />}
            >
              <Card.Meta title={<a className='card-title'>{item.title}</a>} description={item.subDescription} />
              <div className='item-footer'>
                <span className='footer-left'>{item.time}</span>
                <span className='footer-right'>
                  <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F26%2F20201226211434_03e58.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669134347&t=007b2f08d71bb0e807880b8ba8d793e6" alt="" />
                </span>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </PageWrapper>
  )
})