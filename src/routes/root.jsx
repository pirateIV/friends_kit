import App from '@/App';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

const Root = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <App>{<Outlet />}</App>
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default Root;
