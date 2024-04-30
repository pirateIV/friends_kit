import App from '@/App';
import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { selectCurrentToken } from '@/auth/reducers/login/loginSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users/user';

const Root = () => {
  // const auth = useAuth();
  const location = useLocation();
  // const user = useSelector(selectCurrentUser);
  // const token = useSelector(selectCurrentToken);
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.data;
        data && setUser(data);
        console.log(data);
        setIsAuthenticated(true);
        // console.log(user);
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      }
    };
    getUser();
  }, []);

  return user ? <App /> : <Navigate to='/login' state={{ from: location }} />;
};

export default Root;
