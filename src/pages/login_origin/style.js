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
    /* background: url(http://hh-oss-picture.miyapay.com/box/406cd5941f73e1cb469fa5f53306972e.png); */
    /* background: url(https://wanningyuandian-uat-bucket.oss-cn-shenzhen.aliyuncs.com/unioncenter/image/04d1758d6d0f4f0abaf95d56855d45e7); */
    background: url(https://wanningyuandian-uat-bucket.oss-cn-shenzhen.aliyuncs.com/unioncenter/image/4e32f420ec57443e95caa64957ed8e2e);
    background-size: 100% 100%;
  }
  .logo {
    width: 182px;
    height: 32px;
    position: absolute;
    left: 40px;
    top: 24px;
    background: url(http://hh-oss-picture.miyapay.com/box/77d67bdce52bc9ae401d162b38c70eb5.png);
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
    background: #fff;
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
  .input-wrap {
    position: relative;
    height: 48px;
    line-height: 48px;
    color: rgba(0, 0, 0, 0.85);
    display: inline-block;
    width: 100%;
    .input-item {
      width: 100%;
      height: 100%;
      background: #e8f0fe;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.85);
      outline: none;
      padding-left: 46px !important;
      :focus {
        border-color: #3bd5e3;
        border-right-width: 1px !important;
        -webkit-box-shadow: 0 0 0 2px rgb(22 191 213 / 20%);
        box-shadow: 0 0 0 2px rgb(22 191 213 / 20%);
      }
    }
  }
  .account::before {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    display: inline-block;
    content: "";
    width: 18px;
    height: 18px;
    background-image: url(${require("@/assets/img/Account.png")});
    background-size: 101%;
  }
  .password::before {
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
    display: inline-block;
    content: "";
    width: 18px;
    height: 18px;
    background-image: url(${require("@/assets/img/password.png")});
    background-size: 101%;
  }
  .link {
    color: #16bfd5;
    cursor: pointer;
    font-size: 14px;
    :hover {
      color: #3bd5e3;
    }
  }
  .login-btn {
    display: inline-block;
    width: 100%;
    background-color: #1cc3d7;
    color: #fff;
    line-height: 48px;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    margin: 21px 0 14px;
    cursor: pointer;
    :hover {
      background-color: #3bd5e3;
    }
  }
`;
