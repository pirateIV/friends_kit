import { Link } from 'react-router-dom';
import AuthContainer from '@/auth/components/AuthContainer';
import FakeNavigation from '@/auth/components/FakeNavigation';
import LoginIllustration from './LoginIllustration';
import LoginFormContainer from './LoginFormContainer';

const LoginContent = ({ login, error, isError, setIsError }) => {
  return (
    <AuthContainer>
      <FakeNavigation />
      <section className='p-2' style={{ height: 'calc(100vh - 100px)' }}>
        <div className='flex-center max-w-[1140px] w-full h-full mx-auto'>
          <LoginIllustration />
          <aside className='w-full px-10 sm:px-0 mx-auto sm:w-3/4 md:w-[67%] lg:w-1/2'>
            <div>
              <h2 className='text-[1.5rem] font-montserrat font-normal dark:text-[#fafafa]'>
                Welcome back
              </h2>
              <small className='dark:text-gray-200/50'>
                Enter your credentials to sign in.
              </small>
            </div>
            <LoginFormContainer
              error={error}
              login={login}
              isError={isError}
              setIsError={setIsError}
            />
            <div className='mt-5 lg:w-3/4 text-center'>
              <Link to='/signup' className='text-sm text-gray-500 hover:text-blue-500'>
                Don't have an account? Sign Up
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </AuthContainer>
  );
};

export default LoginContent;
