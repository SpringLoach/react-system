import styled from "styled-components";

export const TopTipWrapper = styled.div`
  padding: 10px 24px;
  border-top: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .06);
  h2 {
    font-weight: 600;
  }
`;

export const PageWrapper = styled.div`
  padding: 24px;
  .card {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, .06);
  }
  .steps {
    max-width: 960px;
    margin: auto;
  }
  .contact-way {
    label {
      font-weight: 600;
    }
  }
`;
// margin-top: -24px;
export const FromWrapper = styled.div`
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  min-width: 520px;
  max-width: 100%;
  margin: 24px auto 30px;
`;
