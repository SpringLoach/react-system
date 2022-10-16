import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .collapsed-btn {
    border: none;
    box-shadow: none;
    cursor: pointer;
    &:after {
      display: none;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
  }
  .tip-item {
    margin: 0 10px;
    cursor: pointer;
  }
  .ant-badge-count {
    transform: translate(74%, -50%);
    height: 14px;
    line-height: 14px;
  }
  .ant-dropdown-trigger {
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
    }
  }
  .avator-img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 6px;
  }
  .nickname {
    color: grey;
  }
`;
