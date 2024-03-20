import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useCustomLocation = (path) => {
  const location = useLocation();
  const [customPath, setCustomPath] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setCustomPath(currentPath === `/${path}` || currentPath === `/${path}/`);
  }, [location]);

  const isCustomPath = (customPath) => {
    if (customPath) {
      return true;
    }
    return;
  };

  return customPath;
};

export default useCustomLocation;
