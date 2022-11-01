import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: rgb(196, 203, 207);
  width: 100%;
  height: 100vh;
  background-image: url("https://z4a.net/images/2022/10/26/texture.png");
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 40px;
    font-weight: 700;
    color: #000;
    margin-bottom: 0;
  }
  p {
    margin: 25px 0 0;
    height: 45px;
    font-size: 40px;
    color: rgb(238, 158, 10);
  }
  .extract-btn {
    position: relative;
    z-index: 1;
    margin-top: 30px;
    padding: 8px 30px;
    font-size: 20px;
    border: 2px solid #fff;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    background: transparent;
    overflow: hidden;
    outline: none;
    &::after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: 10;
    }
    &:hover::after {
      left: 120%;
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

export const DiyContent = styled.div`
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 16px;
    cursor: default;
    font-weight: 600;
    color: #606266;
  }
  textarea {
    height: 200px;
    resize: none;
    font-family: monospace;
    border-radius: 4px;
  }
  .img-btn {
    margin-top: 20px;
    display: flex;
    height: 120px;
    padding: 0 70px;
    justify-content: space-between;
    align-items: center;
    img {
      display: inline-block;
      width: 100px;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        box-shadow: 0 0 0 3px rgba(233, 111, 157, 0.08);
        border-radius: 50%;
      }
    }
    .btn-wrap {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }
  }
`;
