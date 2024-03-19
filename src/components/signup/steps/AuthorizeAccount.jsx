import { useDispatch } from 'react-redux';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import CustomButtonGroup from '../../common/CustomButtonGroup';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../Form/PasswordInput';
import { useEffect } from 'react';

const AuthorizeAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProgress(75));
  }, []);
  const prev = () => navigate('/signup/upload-profile');
  const next = () => navigate('/signup/created');

  return (
    <SignupWrapper id='authorize' title='Secure your account.'>
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({ errors, touched }) => (
          <Form className='w-full max-w-[540px]'>
            <PasswordInput />
            <CustomButtonGroup prev={prev} next={next} />
          </Form>
        )}
      </Formik>
    </SignupWrapper>
  );
};

export default AuthorizeAccount;
