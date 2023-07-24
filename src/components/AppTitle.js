import styled from "styled-components";
import FontSize from "../styles/FontSize";

const AppTitleStyle = styled.header`
  margin: 0 0 40px;

  h1 {
    font-size: ${FontSize.large};
    font-weight: 800;
  }
`;

const AppTitle = function () {
  return (
    <AppTitleStyle>
      <h1>Simple Memo</h1>
    </AppTitleStyle>
  );
};

export { AppTitle };
