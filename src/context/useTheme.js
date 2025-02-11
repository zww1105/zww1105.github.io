import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = document.documentElement; // 将 root 移动到 useEffect 内部

    // 移除旧主题
    root.classList.remove("light", "dark");

    // 设置页面的主题
    root.classList.add(theme);

    // 将当前主题保存到 localStorage
    localStorage.setItem("theme", theme);
  }, [theme]); // 仅当 theme 变化时执行

  return { theme, toggleTheme };
};

export default useTheme;
