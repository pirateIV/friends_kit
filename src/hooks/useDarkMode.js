import { useEffect, useState } from "react";

const useDarkMode = () => {
  // Initialize theme from localStorage or default to 'light'
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDarkMode = theme === "dark" ? true : false;

  return {
    isDarkMode,
  };
};

export default useDarkMode;
