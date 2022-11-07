import React, { memo, createRef, useState, useLayoutEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";

import { LeftOutlined } from "@ant-design/icons";
import { ContentWrapper } from "./style";

export default memo((props) => {
  // 获取 redux 中的状态、dispatch方法
  const { userInfo } = useSelector((state) => {
    return {
      userInfo: state.getIn(["login", "userInfo"]),
    };
  }, shallowEqual);
  // state
  const history = useHistory();
  const [show, setShow] = useState(true);

  const dom = createRef();

  const resize = () => {
    requestAnimationFrame(() => {
      if (!dom.current) {
        return;
      }
      const { offsetWidth } = dom.current;
      if (offsetWidth > 800) {
        if (show !== false) {
          setShow(false);
        }
      }
      // window.innerWidth
      if (offsetWidth < 800) {
        if (show !== true) {
          setShow(true);
        }
      }
    });
  };

  useLayoutEffect(() => {
    if (dom.current) {
      window.addEventListener("resize", resize);
      resize();
    }
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [dom.current, show]);

  const skipBack = () => {
    history.goBack();
  };
  const skipCenter = () => {
    history.replace("/phone/center");
  };

  return (
    <div ref={dom}>
      {show ? (
        <ContentWrapper>
          <LeftOutlined style={{ color: "#fff" }} onClick={skipBack} />
          <div className="title">{props.title}</div>
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
      ) : null}
    </div>
  );
});
