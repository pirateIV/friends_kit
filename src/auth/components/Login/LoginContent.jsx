import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useLoginMutation } from '@/app/api/authSlice';
import { getTheme } from '@/redux/reducers/themeReducer';
import AuthContainer from '@/auth/components/AuthContainer';
import FakeNavigation from '@/auth/components/FakeNavigation';

import Wrapper from './Wrapper';
import LoginForm from './LoginForm';
import LoginAlert from './LoginAlert';
import LoginMessage from './LoginMessage';
import LoginFormContainer from './LoginFormContainer';

const LoginContent = () => {
  const theme = useSelector(getTheme());

  const [isError, setIsError] = useState(false);
  const [login, { error }] = useLoginMutation();

  useEffect(() => {
    if (error) {
      console.log(error);
      setIsError(true);
    }
    setTimeout(() => setIsError(false), 5000);
  }, [error]);

  let content;

  if (error) {
    if (error.status === 'FETCH_ERROR') {
      content = 'Please connect to the internet';
    } else if (error.data.error) {
      content = error.data.error;
    }
  }

  return (
    <AuthContainer>
      <FakeNavigation />
      <Wrapper>
        <LoginFormContainer>
          <LoginAlert content={content} isError={isError} />
          <LoginForm
            login={login}
            theme={theme}
            isError={isError}
            setIsError={setIsError}
          />
        </LoginFormContainer>
        <LoginMessage />
      </Wrapper>
    </AuthContainer>
  );
};

export default LoginContent;
