import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from '@/redux/reducers/themeReducer';
import { useLoginMutation } from '@/app/api/authSlice';
import { setCredentials } from '@/auth/reducers/login/loginSlice';
import LoginContent from '@/auth/components/Login/LoginContent';

const Login = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [login, { error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      console.log(error);
      setIsError(true);
    }
    setTimeout(() => setIsError(false), 5000);
  }, [error]);

  return (
    <LoginContent
      error={error}
      login={login}
      isError={isError}
      setIsError={setIsError}
    />
  );
};

export default Login;
