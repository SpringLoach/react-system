import styled from "styled-components";

export const ConentWrapper = styled.div`
  padding: 24px 24px 20px;
  text-align: center;
  .icon-row {
    line-height: 12px;
  }
  .github-icon, .sys-name {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.45);
    &:hover {
      color: rgba(0, 0, 0, 0.85);
    }
  }
  .sys-name {
    margin-left: 16px;
    display: inline-block;
  }
  .tips {
    margin-top: 12px;
    color: rgba(0, 0, 0, 0.45);
  }
`;
