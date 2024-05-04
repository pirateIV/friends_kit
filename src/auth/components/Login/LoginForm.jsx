import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { submitBtnClass } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '@/app/api/authSlice';
import InputField from '@/components/common/InputField';
import ForgotPassword from '@/components/login/ForgotPassword';
// import { useEffect } from 'react';
import { getCurrentUser } from '@/auth/reducers/login/loginSlice';
// import { getCurrentUser, setCredentials } from '@/auth/reducers/login/loginSlice';

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

const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const { isAuthenticated, isError } = useSelector((state) => state.auth);

  console.log(isAuthenticated);

  const submitForm = async (values) => {
    const { token } = await login(values).unwrap();
    dispatch(getCurrentUser());
    console.log(token);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
              placeholder='Enter your password'
            />
          </div>

          <ForgotPassword />
          <button
            type='submit'
            className={submitBtnClass}
            disabled={isLoading || isError}>
            {isLoading ? 'logging in...' : 'Login'}
          </button>
        </section>
      </Form>
    </Formik>
  );
};

export default LoginForm;
