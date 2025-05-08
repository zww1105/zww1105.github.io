import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import styled from "styled-components";

// 使用 lazy 加载页面组件
const Home = lazy(() => import("./pages/Home"));
const Photo = lazy(() => import("./pages/Photo"));
const About = lazy(() => import("./pages/About"));
const Detail = lazy(() => import("./pages/Detail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// 通用组件
import BackToTop from "./components/BackToTop";
import Layout from "./components/Layout";
import ButterCMSLogo from "./components/ButterCMSLogo";

// 样式
import { StyledWrapper } from "./styles/App.styles";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1721;
`;

const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Photo />} />
      <Route
        path="/*"
        element={
          <StyledWrapper>
            <div className="my-container">
              <Layout>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/detail/:id" element={<Detail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <ButterCMSLogo />
              </Layout>
            </div>
            <BackToTop />
          </StyledWrapper>
        }
      />
    </Routes>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <Suspense
            fallback={
              <LoaderWrapper>
                <Loader />
              </LoaderWrapper>
            }
          >
            <AppContent />
          </Suspense>
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
