import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { useAppContext } from "./context/useAppContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import styled from "styled-components";
const AppContent = () => {
  const { theme, toggleTheme } = useAppContext();

  const routes = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
  ];

  return (
    <StyledWrapper>
      <div className="my-container font-extralight">
        <div className="p-4 max-w-screen-xl bg-background text-foreground m-auto min-h-screen dark:bg-zinc-900 ring-1 ring-zinc-100 dark:ring-zinc-300/20">
          <div className="max-w-screen-lg m-auto pb-20">
            <header className="flex mb-24">
              <nav className="rounded-lg flex gap-4 items-center flex-1">
                {routes.map((i) => (
                  <NavLink
                    key={i.path}
                    to={i.path}
                    className={({ isActive }) =>
                      `text-sm px-4 py-1 rounded-full font-medium text-muted-foreground transition-colors hover:text-primary ${
                        isActive ? "text-primary bg-muted" : ""
                      }`
                    }
                  >
                    {i.name}
                  </NavLink>
                ))}
              </nav>
              <div className="form-control ml-auto">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="dark-mode"
                    checked={theme === "dark"}
                    onCheckedChange={toggleTheme}
                  />
                  <Label htmlFor="dark-mode">Dark</Label>
                </div>
              </div>
            </header>
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
    width: 100%;
    height: 100%;
    background-color: var(--background-color, var(--background-color-light));
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        var(--color, var(--color-light)) 25%,
        var(--color, var(--color-light)) 26%,
        transparent 27%,
        transparent 74%,
        var(--color, var(--color-light)) 75%,
        var(--color, var(--color-light)) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        var(--color, var(--color-light)) 25%,
        var(--color, var(--color-light)) 26%,
        transparent 27%,
        transparent 74%,
        var(--color, var(--color-light)) 75%,
        var(--color, var(--color-light)) 76%,
        transparent 77%,
        transparent
      );
    background-size: 55px 55px;
  }
`;

export default App;
