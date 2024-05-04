import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import LoginContent from '@/auth/components/Login/LoginContent';

const Login = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return <LoginContent />;
};

export default Login;
