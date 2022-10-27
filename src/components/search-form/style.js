import styled from "styled-components";

export const ConentWrapper = styled.div`
  .gutter-row {
    margin-bottom: 16px;
  }
  .expand-btn {
    margin-left: 10px;
    cursor: pointer;
    color: #1890ff;
    &:hover {
      color: #40a9ff;
    }
  }
  .expand-icon {
    margin-left: 2px;
    color: #1890ff;
    transition: .5s all;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;