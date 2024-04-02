import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from '@/redux/reducers/themeReducer';
import { useLoginMutation } from '@/app/api/apiSlice';
import { setCredentials } from '@/auth/reducers/login/loginSlice';
import LoginContent from '@/auth/components/Login/LoginContent';
import loginIlustrDark from '@/assets/images/login/illustration-dark.svg';
import loginIlustrLight from '@/assets/images/login/illustration-light.svg';

const Login = () => {
  const theme = useSelector(getTheme());
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [login, { error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
    setTimeout(() => setIsError(false), 5000);
  }, [error]);

  return (
    <LoginContent
      theme={theme}
      loginIlustrLight={loginIlustrLight}
      loginIlustrDark={loginIlustrDark}
      isError={isError}
      setIsError={setIsError}
    />
  );
};

export default Login;
