import styled from "styled-components";

export const ConentWrapper = styled.div`
  padding: 24px;
  .left {
    /* width: 224px; */
    width: 124px;
    border-right: 1px solid #f0f0f0;
    .ant-menu-item-selected {
      color: #1890ff;
      font-weight: 600;
      border-right: 3px solid #1890ff;
    }
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
