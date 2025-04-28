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
    width: 100%;
    background: linear-gradient(
      -45deg,
      #a3d8f4,
      /* 淡蓝色 */ #b6f0b6,
      /* 淡绿色 */ #f8e1a1,
      /* 淡黄色 */ #f9d3f2,
      /* 淡紫粉色 */ #fbd0df,
      /* 浅粉色 */ #d2b3f2,
      /* 淡紫色 */ #c1e2f7,
      /* 淡蓝紫色 */ #e6f9d8,
      /* 浅黄绿色 */ #d8f9f5 /* 淡青色 */
    );
    background-size: 500% 500%; /* 调整背景大小，增加变化幅度 */
    animation: gradient 40s ease-in-out infinite; /* 更长时间的动画过渡，缓慢变化 */
    height: 200%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 50% 100%;
    }
    50% {
      background-position: 100% 50%;
    }
    75% {
      background-position: 50% 0%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default App;
