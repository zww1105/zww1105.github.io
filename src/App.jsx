import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";
import styled from "styled-components";

const AppContent = () => {
  return (
    <StyledWrapper>
      <div className="my-container">
        <div className="p-4 max-w-screen-xl bg-background m-auto min-h-screen ring-1 ring-zinc-100 tracking-wide">
          <div className="max-w-screen-md m-auto py-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <div className="fixed bottom-4 left-4">
          <a href="https://buttercms.com">
            <img
              width={120}
              src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
              alt=""
            />
          </a>
        </div>
      </div>
      <BackToTop />
    </StyledWrapper>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <AppContent />
      </Router>
    </AppProvider>
  );
};

const StyledWrapper = styled.div`
  .my-container {
    --bg: radial-gradient(#000 5%, #0000 6%);
    --size: 3rem;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    background-image: var(--bg), var(--bg);
    background-position: 0 0, calc(var(--size) / 2) calc(var(--size) / 2);
    background-size: var(--size) var(--size);
  }
`;

export default App;
