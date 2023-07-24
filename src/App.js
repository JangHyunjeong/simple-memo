import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";

// constant
import Colors from "./styles/Colors";

// components
import { AppBackground } from "./components/AppBackground";
import { AppContainer } from "./components/AppContainer";
import { AppTitle } from "./components/AppTitle";

// pages
import { ListPage } from "./pages/ListPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <AppBackground>
        <AppContainer>
          <AppTitle></AppTitle>

          <Routes>
            {/* 1. 메인페이지 */}
            <Route path="/" element={<ListPage></ListPage>}></Route>
          </Routes>
        </AppContainer>
      </AppBackground>
    </div>
  );
}

export default App;
