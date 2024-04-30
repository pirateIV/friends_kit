import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import InputField from '@/components/common/InputField';
import ForgotPassword from '@/components/login/ForgotPassword';
import { setCredentials } from '@/auth/reducers/login/loginSlice';
import { submitBtnClass } from '.';
import {
  getCurrentUser,
  setIsAuthenticated,
} from '@/auth/reducers/user/currentUserSlice';
import { useEffect } from 'react';

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

const LoginForm = ({ login, isError }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser.user);
  const isAuthenticated = useSelector((state) => state.currentUser.isAuthenticated);
  const navigate = useNavigate();

  console.log(user);

  const submitForm = async (values) => {
    const token = await login(values).unwrap();
    localStorage.setItem('token', token);
    dispatch(setCredentials(token));
    dispatch(getCurrentUser());
    dispatch(setIsAuthenticated(true));
    navigate('/');
  };

  useEffect(() => {
    if (user) {
      dispatch(setIsAuthenticated(true));
    }
  }, [user, dispatch]);

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
              // autoComplete='current-password'
              placeholder='Enter your password'
            />
          </div>

          <ForgotPassword />
          <button
            type='submit'
            className={submitBtnClass}
            disabled={isAuthenticated || isError}>
            Login
          </button>
        </section>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func,
  isError: PropTypes.bool.isRequired,
};

export default LoginForm;
