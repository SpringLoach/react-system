import styled from "styled-components";

export const PageWrapper = styled.div`

`;

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
  width: 85%;
  margin: auto;
  @media (min-width: 1100px) {
    max-width: 960px;
  }
`;

export const ArticleWrap = styled.div`
  margin-top: 20px;
  .info-row {
    margin-bottom: 20px;
  }
  .info-tip {
    color: #666;
  }
  .paragraph {
    font-family: sans-serif;
    letter-spacing: 0.05rem;
    font-size: 16px;
    color: #1d1d1d;
  }
`;
