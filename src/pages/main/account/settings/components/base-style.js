import styled from "styled-components";

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  .province {
    label {
      font-weight: 600;
    }
  }
`;
export const Left = styled.div``;
export const Right = styled.div`
  margin-left: 104px;
`;
export const ImgWrapper = styled.div`
  margin: 8px 0 12px;
  border-radius: 50%;
  height: 114px;
  width: 114px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;
