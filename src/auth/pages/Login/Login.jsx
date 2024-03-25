import { Form, Formik } from 'formik';

import InputField from '@/components/common/InputField';
import AuthContainer from '@/auth/components/AuthContainer';
import FakeNavigation from '@/auth/components/FakeNavigation';

import loginIlustrLight from '@/assets/images/login/illustration-light.svg';
// import loginIlustrDark from '@/assets/images/login/illustration-dark.svg';

const Login = () => {
  return (
    <AuthContainer>
      <FakeNavigation />
      <section className='p-2' style={{ height: 'calc(100vh - 100px)' }}>
        <div className='flex-center max-w-[1140px] w-full h-full mx-auto'>
          <img
            src={loginIlustrLight}
            className='max-w-[620px]'
            alt='login-illustration'
          />
          <aside className='w-1/2'>
            <div>
              <h2 className='text-[1.5rem]'>Welcome back</h2>
              <small>Enter your credentials to sign in.</small>
            </div>
            <Formik
              initialValues={{ email: '', password: '' }}
              onSubmit={(values) => console.log(values)}>
              <Form>
                <section className='inputs w-3/4 mt-4 space-y-2'>
                  <InputField
                    type='email'
                    name='email'
                    label='Email'
                    placeholder='Enter your email address'
                  />
                  <InputField
                    type='password'
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                  />
                </section>
                <div>
                  
                </div>
              </Form>
            </Formik>
          </aside>
        </div>
      </section>
    </AuthContainer>
  );
};

export default Login;
