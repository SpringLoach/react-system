import styled from "styled-components";

export const PageWrapper = styled.div`
    .card-title {
      color: #000;
    }
    .ant-list-item:hover {
      .card-title {
        color: #1890ff;
      }
    } 
  .item-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    .footer-left {
      color: rgba(0, 0, 0, 0.45);
      font-size: 12px;
    }
    .footer-right img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`