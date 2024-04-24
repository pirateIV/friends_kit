import App from '@/App';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

const Root = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? <App /> : <Navigate to='/login' state={{ from: location }} />;
};

export default Root;
