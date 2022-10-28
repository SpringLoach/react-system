import styled from "styled-components";

export const ConentWrapper = styled.div`
  text-align: right;
  padding: 0 24px 12px;
  .anticon {
    cursor: pointer;
    margin-left: 10px;
  }
  .column-settings {
    display: inline-block;
    position: relative;
  }
`;
export const ColumnSettingsWrapper = styled.div`
  position: absolute;
  right: 0;
  box-shadow: 0px 0px 12px rgb(0 0 0 / 12%);
  background: #fff;
  width: 220px;
  padding: 4px 10px; 
  z-index: 998;
  .checkbox-group-row {
    border-bottom: 1px solid #eee;
    padding-bottom: 6px;
  }
`;
