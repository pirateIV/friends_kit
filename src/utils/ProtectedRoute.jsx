import App from '@/App';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { error, user, token, isAuthenticated } = useSelector((state) => state.auth);

  // const authSucess = token && isAuthenticated
  console.log(user)

  if (error) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default ProtectedRoute;
