import App from '@/App';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import {
  getCurrentUser,
  selectCurrentToken,
  setCredentials,
} from '@/auth/reducers/login/loginSlice';
import logoLoading from '@/assets/images/logo/logo.svg';

const ProtectedRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='min-h-screen w-full p-32 flex items-center justify-center'>
        <img src={logoLoading} className='object-cover h-3/4' alt='' />
        {/* <p>loading...</p> */}
      </div>
    );
  }

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
