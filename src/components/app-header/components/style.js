import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;
  transform: translateY(5px);
  width: 336px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 6%);
  border-radius: 2px;
  .ant-tabs-nav-wrap {
    justify-content: center;
  }
`;

export const CommonWrapper = styled.div`
  .footer-btn-group {
    display: flex;
    border-top: 1px solid #f0f0f0;
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
`
