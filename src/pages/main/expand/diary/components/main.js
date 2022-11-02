import React, { memo } from 'react'

import { Input } from 'antd'
import { MainWrapper } from './main-style'

const text5 = `
背景： 上海，事业编制，党员，每次核酸检测都冲在(*最前面*)，就是站在医生边上的位置，穿大白，离检测位置不超过2米的地方，一次不落。只要是核酸检测，社区有需要我就第一个报名，我觉得这是我作为一个党员的义务，也是我的责任。
<div class='sub-title'>介绍</div>
政府给我们一人一份的蔬菜

----

政府给我们一人一份的蔬菜

(-这里分段-)

故事2: 政府给我们一人一份

[[https://pica.zhimg.com/v2-d41c2ceaed8f51999522f903672a521f_l.jpg?source=1940ef5c]]
<<蔬菜礼包>>

故事2: 政府给我们一人一份的蔬菜礼包有多的，居委并没有在群里提到这件事情，放了几天之后直接把整袋整袋的蔬菜礼包丢到小区垃圾桶，居民看到之后跑去把垃圾桶翻开，找蔬菜吃，发现丢掉的蔬菜都是好的`

function transformTextareaContent66(text) {
  let replaceRegex = /(\n\r|\r\n|\r|\n)/g;
  let targetText = text || "";
  if (targetText.indexOf("<table>") === -1) {
    return targetText.replace(replaceRegex, "<div class='demo'></div>");
  } else {
    return targetText;
  }
}

// 将多行文本进行转换
function transformTextareaContent(text) {
  return text5.replace(/\-\-\-\-/g, '<div class="division"></div>')
}

function getParamsFromBrackets(str) {
  const a = str.replace(/\(\-/g, '<div class="division2"><span class="division-item"></span>')
  return a.replace(/\-\)/g, '<span class="division-item"></div>')
}

function getParamsFromBrackets2(str) {
  const a = str.replace(/\[\[/g, '<img style="width: 100%" src="')
  return a.replace(/\]\]/g, '" alt="" />')
}

function getParamsFromBrackets3(str) {
  const a = str.replace(/<</g, '<div class="img-tip">')
  return a.replace(/>>/g, '</div>')
}

function getParamsFromBrackets4(str) {
  const a = str.replace(/\(\*/g, '<strong>')
  return a.replace(/\*\)/g, '</strong>')
}

const text6 = transformTextareaContent(text5)
const text7 = getParamsFromBrackets(text6)
const text8 = getParamsFromBrackets2(text7)
const text9 = getParamsFromBrackets4(text8)
const text10 = transformTextareaContent66(getParamsFromBrackets3(text9))

export default memo(() => {
  return (
    <MainWrapper>
      <h2 className='title'>这里是个标题</h2>
      <div className='avatar-row'>
        <img className='avatar' src="https://pica.zhimg.com/v2-d41c2ceaed8f51999522f903672a521f_l.jpg?source=1940ef5c" alt="" />
        <span className='name'>匿名用户</span>
      </div>
      {/* <div className='content2'>{text5}</div>
      <br /> */}
      <div className='content2' dangerouslySetInnerHTML={{ __html: text10 }}></div>
      <div className='sub-title'>介绍</div>
      <Input.TextArea rows={4} onChange={(e) => { console.log(e.target.value) }} />
    </MainWrapper>
  )
})