import AuthContainer from '../../components/AuthContainer';
import FakeNavigation from '../../components/FakeNavigation';

import loginIlustrLight from '../../../assets/images/login/illustration-light.svg';
// import loginIlustrDark from '../../../assets/images/login/illustration-dark.svg';

const Login = () => {
  return (
    <AuthContainer>
      <FakeNavigation />
      <section className='h-[650px]'>
        <div className='flex-center h-full'>
          <div className='flex-center max-w-[1040px] w-full mx-auto'>
            <aside className='w-1/2'>
              <img src={loginIlustrLight} className='h-full' alt={'login-illustration'} />
            </aside>
            <aside className='w-1/2'>
              <div>
                <h2 className='text-[1.5rem]'>Welcome back</h2>
                <small>Enter your credentials to sign in.</small>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </AuthContainer>
  );
};

export default Login;
