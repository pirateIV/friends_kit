import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '@/app/api/apiSlice';
import InputField from '@/components/common/InputField';
import ForgotPassword from '@/components/login/ForgotPassword';
import { setCredentials } from '@/auth/reducers/login/loginSlice';

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

const LoginForm = ({ theme, login, isError, setIsError }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [login, { error }] = useLoginMutation();

  const submitForm = async (values) => {
    const user = await login(values).unwrap();
    dispatch(setCredentials(user));
    navigate('/');
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => submitForm(values)}
    >
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
          <button
            type='submit'
            className='my-3 w-full py-2.5 text-white font-medium text-sm rounded-md bg-blue-600 dark:border-t border-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed'
            disabled={isError}
          >
            Login
          </button>
        </section>
      </Form>
    </Formik>
  );
};

export default LoginForm;
