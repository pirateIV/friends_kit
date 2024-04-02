import React from 'react';
import LoginForm from './LoginForm';
import LoginAlert from './LoginAlert';

const LoginFormContainer = ({ error, login, theme, isError, setIsError }) => {
  return (
    <div>
      <LoginAlert error={error} isError={isError} />
      <LoginForm login={login} theme={theme} isError={isError} setIsError={setIsError} />
    </div>
  );
};

export default LoginFormContainer;
