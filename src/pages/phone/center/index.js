import React, { memo } from 'react'
import { useSelector, shallowEqual } from "react-redux";

import { RightOutlined, FileDoneOutlined, LikeOutlined } from "@ant-design/icons"
import { PageWrapper, PageHeader, PageContent } from "./style"

const MenuIconStyle = {
  background: 'pink',
  color: '#ffffff',
  padding: '10px',
  'borderRadius': '12px',
  'marginRight': '10px'
}

const menuConfig = [
  {
    title: '我的日记',
    icon: <FileDoneOutlined style={MenuIconStyle} />,
    path: '/diary-record'
  }, {
    title: '随便吃点',
    icon: <LikeOutlined style={MenuIconStyle} />,
    path: '/eat'
  }
]

export default memo((props) => {
  // 获取 redux 中的状态、dispatch方法
  const { userInfo } = useSelector((state) => {
    return {
      userInfo: state.getIn(["login", "userInfo"]),
    };
  }, shallowEqual);
  // state

  const skip = (path) => {
    console.log(path)
    props.history.push(path);
  }
  return (
    <PageWrapper>
      <PageHeader>
        <img
          className="avatar-img"
          src={
            userInfo.avatar ||
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F26%2F20201226211434_03e58.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669134347&t=007b2f08d71bb0e807880b8ba8d793e6"
          }
          alt=""
        />
        <div className="nickname">{userInfo.nickname || "匿名用户"}</div>
      </PageHeader>
      <PageContent>
        {menuConfig.map((item) => {
          return (
            <div className='menu-item' key={item.path} onClick={() => { skip(item.path) }}>
              <div className='item-name'>{item.icon}{item.title}</div>
              <RightOutlined />
            </div>
          )
        })}
      </PageContent>
    </PageWrapper>
  )
})
