import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
// import { useAppContext } from "./context/useAppContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import styled from "styled-components";

const AppContent = () => {
  // const { theme, toggleTheme } = useAppContext();

  // const routes = [
  //   { path: "/", name: "Wan的日记" },
  //   { path: "/about", name: "关于Wan" },
  // ];

  return (
    <StyledWrapper>
      <div className="my-container font-extralight font-mono">
        <div className="p-4 max-w-screen-xl bg-background text-foreground m-auto min-h-screen dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-300/20">
          <div className="max-w-screen-md m-auto py-20">
            {/* <header className="flex mb-24 gap-4">
              <nav className="rounded-lg flex gap-4 items-center text-zinc-800">
                {routes.map((i) => (
                  <NavLink
                    key={i.path}
                    to={i.path}
                    className={({ isActive }) =>
                      `text-sm rounded-full font-medium  transition-colors hover:text-pink-500 ${
                        isActive ? "text-pink-500" : ""
                      }`
                    }
                  >
                    {i.name}
                  </NavLink>
                ))}
              </nav>
            </header> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 mb-4 mr-4">
          <a href="https://buttercms.com">
            <img
              width={120}
              src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
              alt=""
            />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const App = () => {
  return (
    <AppProvider>
      <ScrollArea className="w-full h-screen">
        <Router>
          <AppContent />
        </Router>
      </ScrollArea>
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
