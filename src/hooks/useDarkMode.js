import { useSelector } from 'react-redux';

const useDarkMode = () => {
  const theme = useSelector((state) => state.theme);

  const isDarkMode = theme === 'dark' ? true : false;

 

  return {
    theme,
    isDarkMode,
  };
};

export default useDarkMode;
