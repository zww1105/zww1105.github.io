import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { useAppContext } from "./context/useAppContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const AppContent = () => {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 font-extralight">
      <div className="p-4 max-w-screen-xl bg-background text-foreground m-auto min-h-screen dark:bg-zinc-900">
        <div className="max-w-screen-lg m-auto">
          <nav className="rounded-lg mb-32 flex gap-2 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium text-muted-foreground transition-colors hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              About
            </NavLink>
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
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <a href="https://buttercms.com">
          <img
            width={120}
            src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
            alt=""
          />
        </a>
      </div>
    </div>
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

export default App;
