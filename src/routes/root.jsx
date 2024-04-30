import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users/user';

const Root = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return isAuthenticated ? (
    <Navigate to='/' state={{ from: location }} />
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default Root;
