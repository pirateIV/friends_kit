import App from '@/App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  console.log(isAuthenticated);

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default ProtectedRoute;
