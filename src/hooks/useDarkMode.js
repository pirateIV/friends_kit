import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useDarkMode = () => {
  const isDarkMode = useSelector((state) => state.theme.theme);

  return {
    isDarkMode,
  };
};

export default useDarkMode;
