import React, { memo } from "react";

import {
  GithubOutlined,
} from "@ant-design/icons";
import { ConentWrapper } from "./style"

export default memo(() => {

  const goToGitHub = () => {
    window.open('https://github.com/SpringLoach/react-system');
  }
  return (
    <ConentWrapper>
      <div className="icon-row">
        <a className="github-icon" href="https://github.com/SpringLoach/react-system" target="_blank" rel="noopener noreferrer">
          <GithubOutlined onClick={goToGitHub} />
        </a>
        <div className="sys-name">SpringLoach</div>
      </div>
      <div className="tips">赢得别人注意的最好方法，是不用去在意事情的结果如何，也不用意别人是否喜欢我们，只需要努力去做好那些必须完成的事项即可</div>
    </ConentWrapper >
  );
});
