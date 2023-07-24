// import { styled, css } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

// constant
import Colors from "./styles/Colors";

// components
import { AppBackground } from "./components/AppBackground";
import { AppContainer } from "./components/AppContainer";
import { AppTitle } from "./components/AppTitle";
import { Search } from "./components/Search";
import { Button } from "./components/Button";
import { List } from "./components/List";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <AppBackground>
        <AppContainer>
          <AppTitle></AppTitle>

          <div className="router">
            <Search></Search>

            <List></List>

            <Button bg={Colors.blue} style={{ marginTop: "20px" }}>
              메모작성
            </Button>
          </div>
        </AppContainer>
      </AppBackground>
    </div>
  );
}

export default App;
