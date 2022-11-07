import React, { memo } from 'react'
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { LeftOutlined } from "@ant-design/icons"
import { ContentWrapper } from './style'

export default memo((props) => {
  // 获取 redux 中的状态、dispatch方法
  const { userInfo } = useSelector((state) => {
    return {
      userInfo: state.getIn(["login", "userInfo"]),
    };
  }, shallowEqual);
  // state
  const history = useHistory();

  const skipBack = () => {
    history.goBack();
  }
  const skipCenter = () => {
    history.replace("/phone/center");
  }

  return (
    <ContentWrapper>
      <LeftOutlined style={{ color: '#fff' }} onClick={skipBack} />
      <div className='title'>{props.title}</div>
      <img
        className="avatar-img"
        src={
          userInfo.avatar ||
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F26%2F20201226211434_03e58.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669134347&t=007b2f08d71bb0e807880b8ba8d793e6"
        }
        alt=""
        onClick={skipCenter}
      />
    </ContentWrapper>
  )
})
