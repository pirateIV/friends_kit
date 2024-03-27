import { useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';

import useLoadingState from '@/hooks/useLoading';
import CustomButton from '@/components/common/CustomButton';
import SignupWrapper from '@/components/common/SignupWrapper';
import PasswordInput from '@/components/signup/Form/PasswordInput';

import { setProgress } from '@/redux/reducers/progressReducer';
import { getUserInfo, setUserPassword } from '@/auth/reducers/user/userSlice';
import { nextBtnClass, prevBtnClass, stepProps } from '.';

const passwordSchema = Yup.object().shape({
  password: Yup.string()
  .required('required!')
  .min(8, 'password must at least be 8 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one digit'
  ),
  confirmPassword: Yup.string()
    .required('required!')
    .oneOf([Yup.ref('password'), null], 'Passwords does not match!'),
});

const AuthorizeAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, handleLoading } = useLoadingState();
  const { password, confirmPassword } = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(setProgress(75));
  }, []);
  const prev = () => navigate('/signup/upload-profile');
  const next = () => navigate('/signup/created');

  const handleSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setUserPassword(values));
    next();
  };

  return (
    <SignupWrapper {...stepProps.authorizeAcct}>
      <Formik
        initialValues={{ password, confirmPassword }}
        validationSchema={passwordSchema}
        onSubmit={(values) => handleLoading(handleSubmit(values))}>
        {({}) => (
          <Form className='w-full max-w-[540px]'>
            <PasswordInput />
            <div className='flex justify-end gap-1 mt-4'>
              <CustomButton
                content='Back'
                type='button'
                variant='outlined'
                handleClick={prev}
                className={prevBtnClass}
              />
              <Button type='submit' loading={loading} className={nextBtnClass}>
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </SignupWrapper>
  );
};

export default AuthorizeAccount;
