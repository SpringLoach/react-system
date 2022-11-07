import styled from "styled-components";

export const PageWrapper = styled.div`
  background: #fff;
  min-height: 100vh;
  padding-top: 60px;
  @media (min-width: 800px) {
    padding-top: 0;
  }
`;

export const PageContent = styled.div`
  min-height: 100vh;
  /* background: #fff; */
  background: #f5f5f5;
  position: relative;
  padding: 24px;
  max-width: 600px;
  margin: auto;
  .blog-list {
    margin-top: 20px;
    background: #fff;
    padding: 0 10px;
    border-radius: 10px;
  }
  .blog-item {
    /* margin-top: 16px; */
    padding: 10px 0;
    cursor: pointer;
    &:not(:last-child) {
      border-bottom: 1px solid #f5f5f5;
    }
    &:hover {
      color: #e99daa;
    }
  }
`;
