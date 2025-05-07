import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";

// 使用 lazy 加载页面组件
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Detail = lazy(() => import("./pages/Detail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// 通用组件
import BackToTop from "./components/BackToTop";
import Layout from "./components/Layout";
import ButterCMSLogo from "./components/ButterCMSLogo";

// 样式
import { StyledWrapper } from "./styles/App.styles";

const AppContent = () => {
  return (
    <StyledWrapper>
      <div className="my-container">
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
        <ButterCMSLogo />
      </div>
      <BackToTop />
    </StyledWrapper>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <AppContent />
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
