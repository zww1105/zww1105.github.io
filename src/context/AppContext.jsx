import { createContext } from "react";
import PropTypes from "prop-types";
import useTheme from "./useTheme";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// 添加 propTypes
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
