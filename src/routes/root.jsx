import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSelect } from '@material-tailwind/react';
import { selectCurrentToken } from '@/auth/reducers/login/loginSlice';

const Root = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const token = useSelector(selectCurrentToken);

  console.log(isAuthenticated);

  useEffect(() => {
    token ? navigate('/app') : navigate('/login');
  }, [token, navigate]);

  return <Outlet />;
};

export default Root;
