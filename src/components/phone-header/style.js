import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 60px;
  background: #3d3c41;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  .avatar-img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
`;