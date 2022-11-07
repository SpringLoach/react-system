import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: #f5f5f5;
  text-align: center;
`;

export const PageHeader = styled.div`
  padding: 60px 0 40px;
  /* height: 26vh; */
  background: #3d3c41;
  color: #fff;
  .avatar-img {
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 6px;
    border: 2px solid rgba(255, 255, 255, .35)
  }
`;

export const PageContent = styled.div`
  margin-top: 20px;
  background: #ffffff;
  padding: 0 10px;
  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    font-size: 16px;
    &:not(:last-child) {
      border-bottom: 1px solid #ededed;
    }
  }
`;
