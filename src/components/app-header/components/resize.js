import React, { memo, useState, useEffect } from 'react'

import { requestFullScreen, exitFullScreen, isFullscreenElement } from "@/utils/common";

import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";

export default memo(() => {
  const [fullScreen, setFullScreen] = useState(false);
  const [originResizeFunc, setOriginResizeFunc] = useState(null);

  useEffect(() => {
    // 监听 键盘ESC 退出全屏(可以使用屏幕大小监听，触发对应的事件)
    if (window.addEventListener) {
      window.addEventListener("resize", onEscCancelFull, false);
    } else {
      setOriginResizeFunc(window.onresize);
      window.onresize = onEscCancelFull;
    }
    // 销毁清除事件
    return () => {
      if (window.removeEventListener) {
        window.removeEventListener("resize", onEscCancelFull, false);
      } else {
        window.onresize = originResizeFunc;
      }
    };
  }, []);
  function onEscCancelFull() {
    // 用于反显状态
    setFullScreen(isFullscreenElement());
  }

  return (
    <>
      {fullScreen ?
        <FullscreenExitOutlined style={{ margin: '0 10px' }} onClick={() => { exitFullScreen() }} />
        : <FullscreenOutlined style={{ margin: '0 10px' }} onClick={() => { requestFullScreen(document.body) }} />}
    </>
  )
})