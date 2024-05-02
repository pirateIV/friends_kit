import LoginContent from '@/auth/components/Login/LoginContent';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if (!isAuthenticated) {
  //   <Navigate to='/login' state={{ from: location }} />;
  // }

  console.log(isAuthenticated);

  return !isAuthenticated ? (
    <LoginContent />
  ) : (
    <Navigate to='/app' state={{ from: location }} />
  );
};

export default Login;
