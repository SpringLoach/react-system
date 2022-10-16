import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: ${(props) => props.justifyContent};
  .App-title {
    color: #61dafb;
    font-size: 18px;
  }
`;
export default LogoWrapper;
