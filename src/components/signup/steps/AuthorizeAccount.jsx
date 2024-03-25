import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-tailwind/react';

import useLoadingState from '@/hooks/useLoading';
import CustomButton from '@/components/common/CustomButton';
import SignupWrapper from '@/components/common/SignupWrapper';
import PasswordInput from '@/components/signup/Form/PasswordInput';

import { setProgress } from '@/redux/reducers/progressReducer';
import { getUserInfo, setUserPassword } from '@/auth/reducers/user/userSlice';
import { nextBtnClass, prevBtnClass, stepProps } from '.';

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
        onSubmit={(values) => handleLoading(handleSubmit(values))}>
        {({}) => (
          <Form className='w-full max-w-[540px]'>
            <PasswordInput />
            <ButtonGroup className='flex justify-end gap-1 mt-4 divide-none'>
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
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </SignupWrapper>
  );
};

export default AuthorizeAccount;
