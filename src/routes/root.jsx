import App from '@/App';
import Login from '@/auth/pages/Login/Login';
import { selectCurrentToken, setCredentials } from '@/auth/reducers/login/loginSlice';
import { getCurrentUser } from '@/auth/reducers/user/currentUserSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, Outlet, useNavigate } from 'react-router-dom';

const Root = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.currentUser.isAuthenticated);
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCredentials(selectCurrentToken));
  }, []);
  
  console.log(isAuthenticated, 'isAuthenticated');
  return isAuthenticated && <App>{<Outlet />}</App>;
  // :
  //  (
  // <Navigate to='/loginff' state={{ from: location }} />
  // );
};

export default Root;
