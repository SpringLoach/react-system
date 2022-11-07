import styled from "styled-components";

export const PageWrapper = styled.div``;

export const PageHeader = styled.div`
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  padding: 0 7.5%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 140px;
  }
`;

export const PageContent = styled.div`
  min-height: calc(100vh - 80px);
  width: 85%;
  margin: auto;
  @media (min-width: 1070px) {
    display: flex;
    max-width: 960px;
  }
`;

export const ArticleWrap = styled.div`
  padding-bottom: 24px;
  margin-top: 20px;
  flex: 1;
  .info-row {
    margin-bottom: 20px;
  }
  .info-tip {
    color: #666;
  }
  .paragraph {
    font-family: sans-serif;
    letter-spacing: 0.05rem;
    font-size: 14px;
    color: #1d1d1d;
    @media (min-width: 1070px) {
      font-size: 16px;
    }
  }
  .img-info {
    color: #999;
    font-size: 12px;
    @media (min-width: 1070px) {
      font-size: 16px;
    }
  }
  img {
    width: 100%;
    margin-bottom: 14px;
  }
  .img-tip {
    margin-top: -10px;
    margin-bottom: 10px;
    text-align: center;
    color: #999;
    font-size: 12px;
    @media (min-width: 1070px) {
      font-size: 16px;
    }
  }
  .division {
    height: 1px;
    width: 100%;
    background: #f0f0f0;
    margin-bottom: 14px;
  }
  .division-text {
    display: flex;
    align-items: center;
    color: #999;
    margin-bottom: 14px;
    .division-item {
      flex: 1;
      height: 1px;
      background: #f0f0f0;
      &:first-child {
        margin-right: 12px;
      }
      &:last-child {
        margin-left: 12px;
      }
    }
  }
`;

export const Aside = styled.div`
  margin-left: 24px;
  width: 300px;
  background: #ccc;
  display: none;
  @media (min-width: 1070px) {
    display: block;
  }
`;
