import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 24px;
`

export const ConfigItemWrapper = styled.div`
  padding: 10px 0;
  border-top: 1px solid #ccc;
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
  .dec-icon, .inc-icon {
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
`