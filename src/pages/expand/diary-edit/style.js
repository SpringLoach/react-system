import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  padding: 24px;
  padding-top: 70px;
  padding-bottom: 60px;
  @media (min-width: 800px) {
    padding-top: 10px;
  }
`;

export const ConfigItemWrapper = styled.div`
  padding: 10px 0;
  &:not(:first-of-type) {
    border-top: 1px solid #eee;
  }
  .config-top {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .config-title {
    font-size: 16px;
    font-weight: 500;
    transform: translateY(-2px);
  }
  .dec-icon,
  .inc-icon {
    color: red;
  }
  .inc-icon {
    color: #009afc;
    margin-left: 10px;
  }
  .ant-popover-inner {
    width: 200px;
    margin-right: 10px;
  }
`;

export const PageFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  color: #fff;
  background: #ff6802;
  cursor: pointer;
`;
