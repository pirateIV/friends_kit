import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

import InputField from '@/components/common/InputField';
import AuthContainer from '@/auth/components/AuthContainer';
import FakeNavigation from '@/auth/components/FakeNavigation';
import ForgotPassword from '@/components/login/ForgotPassword';
import loginIlustrLight from '@/assets/images/login/illustration-light.svg';
import loginIlustrDark from '@/assets/images/login/illustration-dark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from '@/redux/reducers/themeReducer';
import { signInUser } from '@/auth/reducers/login/authSlice';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('required!'),
  password: Yup.string()
    .required('required!')
    .min(8, 'password must at least be 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
    ),
});

const Login = () => {
  const theme = useSelector(getTheme());
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const submitForm = (values) => {
    console.log(values);
    dispatch(signInUser(values));
  };

  return (
    <AuthContainer>
      <FakeNavigation />
      <section className='p-2' style={{ height: 'calc(100vh - 100px)' }}>
        <div className='flex-center max-w-[1140px] w-full h-full mx-auto'>
          <img
            src={theme === 'light' ? loginIlustrLight : loginIlustrDark}
            className='max-w-[620px] hidden xl:flex'
            alt='login-illustration'
          />
          <aside className='w-full px-10 sm:px-0 mx-auto sm:w-3/4 md:w-[67%] lg:w-1/2'>
            <div>
              <h2 className='text-[1.5rem] font-montserrat font-normal dark:text-[#fafafa]'>
                Welcome back
              </h2>
              <small className='dark:text-gray-200/50'>
                Enter your credentials to sign in.
              </small>
            </div>
            <Formik
              initialValues={{ email, password }}
              validationSchema={LoginSchema}
              onSubmit={(values) => submitForm(values)}>
              <Form>
                <section className='inputs w-full mt-4 space-y-2 xl:w-3/4'>
                  <div>
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
                      autoComplete='current-password'
                      placeholder='Enter your password'
                    />
                  </div>
                  <ForgotPassword />
                  <Button
                    type='submit'
                    className='my-3 bg-blue-600 dark:border-t border-blue-300'
                    fullWidth>
                    Login
                  </Button>
                </section>
              </Form>
            </Formik>
            <div className='mt-5 w-3/4 text-center'>
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

export default Login;
