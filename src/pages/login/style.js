import styled from "styled-components";

export const PageWrapper = styled.div`
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#262399),
      to(#0169ba)
    );
    background: linear-gradient(90deg, #262399 0%, #0169ba 100%);
  }
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(https://z4a.net/images/2022/10/12/_202210121255063.jpg);
    background-size: 100% 100%;
  }
  .logo {
    /* width: 182px; */
    width: 100px;
    height: 85px;
    position: absolute;
    left: 40px;
    top: 24px;
    background: url(https://z4a.net/images/2022/10/12/LogoMakr-7mvp7a.png);
    background-size: 100% 100%;
  }
  .copyright {
    position: absolute;
    width: 100%;
    height: 14px;
    bottom: 20px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    font-size: 14px;
    color: #fff;
    text-align: center;
  }
`;

export const Center = styled.div`
  width: 1124px;
  height: 460px;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  .slogan {
    font-size: 64px;
    font-weight: 600;
    color: #fff;
    margin-top: 72px;
    line-height: 1.5;
  }
  .form {
    width: 480px;
    height: 460px;
    background: rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 12%);
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 12%);
    border-radius: 4px;
    padding: 48px;
    position: relative;
  }
  .form-title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;
    margin-bottom: 35px;
    cursor: pointer;
  }

  .ant-input-affix-wrapper {
    /* background: #e8f0fe; */
  }
  .ant-input {
    /* background: #e8f0fe; */
  }
  .ant-input-affix-wrapper-lg {
    padding: 10.44px 11px;
  }
  .ant-input-prefix {
    margin: 0 10px 0 5px;
    color: #000 !important;
  }
  /* 错误样式调整 */
  .ant-input-affix-wrapper {
    /* background: #e8f0fe !important; */
    border-color: transparent !important;
  }

  .link {
    color: #666;
    cursor: pointer;
    font-size: 14px;
    :hover {
      color: #333;
    }
  }
  .login-btn {
    height: auto;
    display: inline-block;
    width: 100%;
    /* background-color: #1cc3d7; */
    background-color: #77a1df;
    color: #fff;
    line-height: 48px;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    margin: 21px 0 14px;
    cursor: pointer;
    :hover {
      background-color: #4d7ac8;
    }
  }
`;
