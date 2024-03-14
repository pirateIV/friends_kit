import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useIsSignupPath = (path) => {
  const location = useLocation();
  const [isSignupPath, setIsSignupPath] = useState(false);

  useEffect(() => {
    const currentPath = location.pathname;
    setIsSignupPath(currentPath === `/${path}` || currentPath === `/${path}/`);
  }, [location]);

  return isSignupPath;
};

export default useIsSignupPath;
