import App from '@/App';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { error, user, token, isAuthenticated } = useSelector((state) => state.auth);

  // if (error) {
  //   return <Navigate to='/login' state={{ from: location }} />;
  // }

  // useEffect(() => {
  //   console.log(error)
  // },[error])

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default ProtectedRoute;
