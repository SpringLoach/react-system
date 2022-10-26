import styled from "styled-components";

export const FooterConfigWrapper = styled.div`
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
  .control-row {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }
  .label {
    display: inline-block;
    width: 80px;
  }
  .input-row {
    margin: 0 0 30px 80px;
    input {
      width: 500px;
    }
  }
  .sure-btn {
    margin-left: 80px;
  }
`;

export const ColorItem = styled.span`
  display: inline-block;
  width: 60px;
  height: 16px;
  transform: translateY(3px);
  background: ${props => props.color};
`

export const AddBtn = styled.span`
  cursor: pointer;
  color: #1890ff;
  margin-right: 6px;
  &:hover {
    color: #40a9ff;
  }
`
