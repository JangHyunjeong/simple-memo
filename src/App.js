import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route } from "react-router-dom";

// constant

// components
import { AppBackground } from "./components/AppBackground";
import { AppContainer } from "./components/AppContainer";
import { AppTitle } from "./components/AppTitle";

// pages
import { ListPage } from "./pages/ListPage";
import { WritePage } from "./pages/WritePage";
import { ViewPage } from "./pages/ViewPage";

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

            {/* 2. 작성페이지 */}
            <Route path="/write" element={<WritePage></WritePage>}></Route>

            {/* 3. 뷰페이지 */}
            <Route path="/view" element={<ViewPage></ViewPage>}></Route>
          </Routes>
        </AppContainer>
      </AppBackground>
    </div>
  );
}

export default App;
