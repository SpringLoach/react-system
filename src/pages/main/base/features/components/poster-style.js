import styled from "styled-components";


export const ConentWrapper = styled.div`
  input {
    width: 300px;
    margin: 0 30px 20px 0;
  }
`

export const ConentPoster = styled.div`
  display: flex;
  /* justify-content: space-around; */
  .poster-target-border {
    display: inline-block;
    border-radius: 4px;
    /* box-shadow: 4px 4px 4px 2px #ccc; */
    /* width: 85%; */
    width: 300px;
    border: 1px solid #bcbcbc;
  }
  #poster-box {
    width: 300px;
    // margin-top: 30px;
  }
  .poster-wrap {
    position: relative;
  }
  .poster-img {
    width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .avator-wrap {
    position: absolute;
    bottom: -60px;
    left: 30px;
    .avator-out {
      display: inline-block;
      background: #fff;
      // padding: 8px;
      border-radius: 50%;
    }
    .avator {
      margin: 4px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .user-name {
      transform: translateY(-6px);
      font-weight: 600;
    }
  }
  .other-info {
    margin-top: 10px;
    padding: 16px;
    display: flex;
    // align-items: flex-end;
    .introduce {
      flex: 1;
      text-align: left;
      margin-top: 36px;
      margin-right: 10px;
      line-height: 1.5;
      color: #5a5a5a;
      word-break: break-word;
    }
  }
  .code-wrap {
    width: 70px;
    margin-bottom: -10px;
    .code-img {
      border: 1px solid #d6d6d6;
      border-radius: 3px;
      padding: 2px 2px 1px;
      .code {
        width: 64px;
        height: 64px;
      }
    }
    .code-test {
      text-align: center;
      font-size: 12px;
      color: #7e7e7e;
      line-height: 1.5;
    }
  }

  .canvas-img {
    cursor: pointer;
  }
  h3 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
  }
`;
