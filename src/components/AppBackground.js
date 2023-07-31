import styled from "styled-components";
import { FlexCenter } from "../styles/Flex";
import bg from "../images/bg.jpg";

export const AppBackground = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bg}) no-repeat center / cover;
  ${FlexCenter}
`;
