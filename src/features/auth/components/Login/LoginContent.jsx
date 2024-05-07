import Wrapper from './Wrapper';
import LoginForm from './LoginForm';
import AuthContainer from '../AuthContainer';
import FakeNavigation from '../FakeNavigation';

const LoginContent = () => {
  return (
    <AuthContainer>
      <FakeNavigation />
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </AuthContainer>
  );
};

export default LoginContent;
