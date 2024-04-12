import React from 'react';
import LoginForm from './LoginForm';
import LoginAlert from './LoginAlert';
import { getTheme } from '@/redux/reducers/themeReducer';
import { useSelector } from 'react-redux';

const LoginFormContainer = ({ error, login, isError, setIsError }) => {
  const theme = useSelector(getTheme());
  return (
    <div>
      <LoginAlert error={error} isError={isError} />
      <LoginForm login={login} theme={theme} isError={isError} setIsError={setIsError} />
    </div>
  );
};

export default LoginFormContainer;
