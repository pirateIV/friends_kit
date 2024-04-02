import React from 'react';
import LoginForm from './LoginForm';
import LoginAlert from './LoginAlert';

const LoginFormContainer = ({ theme, isError, setIsError }) => {
  return (
    <div>
      <LoginAlert isError={isError} />
      <LoginForm theme={theme} isError={isError} setIsError={setIsError} />
    </div>
  );
};

export default LoginFormContainer;
