import { Navigate, useLocation } from 'react-router-dom';
import App from '@/App';
import { useAuth } from '@/hooks/useAuth';

const Root = () => {
  const auth = useAuth();
  const location = useLocation();

  console.log(auth.user)

  // return auth.user ? <App /> : <Navigate to='/login' state={{ from: location }} />;
  return <App />
};

export default Root;
