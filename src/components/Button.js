import styled from "styled-components";
import FontSize from "../styles/FontSize";
import Colors from "../styles/Colors";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  background: ${(props) => props.$bg};
  color: ${(props) =>
    props.$bg === Colors.yellow ? Colors.black : Colors.white};
  font-size: ${FontSize.default};
  border-radius: 4px;
  cursor: pointer;
`;
