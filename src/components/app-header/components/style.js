import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  transform: translateY(5px);
  width: 336px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);
  border-radius: 2px;
  .ant-tabs-nav-wrap {
    justify-content: center;
  }
`;

export const CommonWrapper = styled.div`
  .footer-btn-group {
    display: flex;
    border-top: 1px solid #f0f0f0;
    cursor: pointer;
    .footer-btn {
      display: inline-block;
      text-align: center;
      flex: 1;
      padding: 12px;
      &:first-child {
        border-right: 1px solid #f0f0f0;
      }
    }
  }
`;

export const IconWrapper = styled.span`
  .icon-tip {
    color: #fff;
    font-size: 16px;
    padding: 8px;
    border-radius: 50%;
  }
  .icon-notification {
    background: #3391e5;
  }
  .icon-smile {
    background: #ffce3d;
  }
  .icon-star {
    background: #9ddede;
  }
  .icon-like {
    background: #fe5d58;
  }
`;

export const ContentWrapper = styled.div`
  .ant-list-item {
    cursor: pointer;
    &:hover {
      background: #e6f7ff;
    }
  }
  .ant-list-item-meta {
    padding: 0 24px;
  }
`;

export const ToDoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
