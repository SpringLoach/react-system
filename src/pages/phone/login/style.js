import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #3d3c41;
  text-align: center;
  padding-top: 80px;
  .logo {
    width: 200px;
    height: 173px;
    margin-bottom: 30px;
  }
  .form-wrap {
    padding: 0 60px;
  }
  .password-row {
    margin: 16px 0 40px;
  }
  .ant-input, .ant-input-password {
    background: transparent;
    color: rgba(255, 255, 255, 0.85);
    border-width: 2px;
    padding: 8.5px 11px;
    font-size: 16px;
    &:hover {
      border-color: #fff;
    }
  }
  .ant-input-password-icon {
    color: rgba(255, 255, 255, 0.45);
  }
  .ant-btn {
    width: 100%;
    padding: 12px 15px;
    height: auto;
    background: #02a4f2;
    font-size: 18px;
    background: transparent;
    border: 2px solid #40a9ff;
    color: rgba(255, 255, 255, 0.85);
  }
`;
