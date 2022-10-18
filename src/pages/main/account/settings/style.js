import styled from "styled-components";

export const ConentWrapper = styled.div`
  padding: 24px;
  .left {
    width: 224px;
    border-right: 1px solid #f0f0f0;
    .ant-menu-item-selected {
      color: #1890ff;
      font-weight: 600;
      border-right: 3px solid #1890ff;
    }
  }
  .small-left {
    width: '100%';
    margin-bottom: 12px;
  }
  .ant-menu {
    border-right: none;
  }
  .ant-menu-item {
    padding-left: 26px;
  }
  .right {
    padding: 8px 40px;
    flex: 1;
  }
`;

export const BindingWrapper = styled.div`
  .taobao {
    display: block;
    color: #ff4000;
    font-size: 48px;
    line-height: 48px;
    border-radius: 2px;
  }
  .dingding {
    margin: 2px;
    padding: 6px;
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    background-color: #2eabff;
    border-radius: 2px;
  }
  .alipay {
    color: #2eabff;
    font-size: 48px;
    line-height: 48px;
    border-radius: 2px;
  }
`;
