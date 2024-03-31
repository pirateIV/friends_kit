import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    console.log(theme);
    setTheme(localStorage.getItem('theme'));
  }, [theme]);

  const isDarkMode = theme === 'dark' ? true : false;
  console.log(isDarkMode);

  return {
    isDarkMode,
  };
};

export default useDarkMode;
