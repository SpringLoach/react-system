import styled from "styled-components";

export const MainWrapper = styled.div`
  .avatar-row {
    margin-bottom: 10px;
    .avatar {
      width: 38px;
      height: 38px;
      border-radius: 2px;
    }
    .name {
      margin-left: 14px;
      color: #444;
      font-weight: 600;
    }
  }
  .title {
    font-weight: 600;
  }
  .content {
    font-size: 15px;
    color: #121212;
  }
  .content2 {
    letter-spacing: 0.2px;
    font-size: 15px;
    color: #121212;
    white-space: pre-wrap;
    img {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .division {
    width: 100%;
    height: 1px;
    background: #f0f0f0;
  }
  .division2 {
    margin-top: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ccc;
    .division-item {
      flex: 1;
      height: 1px;
      background: #f0f0f0;
    }
    .division-item:first-child {
      margin-right: 12px;
    }
    .division-item:last-child {
      margin-left: 12px;
    }
  }
  .img-tip {
    color: #9b9696;
    text-align: center;
    font-size: 14px;
    margin-top: -6px;
  }
  .demo {
    height: 6px;
  }
  .sub-title {
    margin-top: 1.2em;
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
  }
`