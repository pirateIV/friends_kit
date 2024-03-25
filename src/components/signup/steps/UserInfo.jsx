import { useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-tailwind/react';

import { nextBtnClass, prevBtnClass, stepProps } from '.';
import { setProgress } from '../../../redux/reducers/progressReducer';

import FormContent from '../Form/FormContent';
import CustomButton from '../../common/CustomButton';
import SignupWrapper from '../../common/SignupWrapper';
import useLoadingState from '../../../hooks/useLoading';
import { getUserInfo, setUserInfo } from '../../../auth/reducers/user/userSlice';

const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, handleLoading } = useLoadingState();
  const user = useSelector(getUserInfo);
  const { firstName, lastName, email } = user;

  useEffect(() => {
    dispatch(setProgress(25));
  }, []);

  const handlePrevious = () => {
    return;
  };
  const handleNext = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setUserInfo(values));
    navigate('/signup/upload-profile');
  };

  return (
    <>
      <SignupWrapper {...stepProps.userInfo}>
        <Formik
          initialValues={{ firstName, lastName, email }}
          onSubmit={(values) => handleLoading(handleNext(values))}>
          {() => (
            <Form className='w-full max-w-[540px]'>
              <FormContent />
              <div className='flex justify-end mt-4 gap-1'>
                <CustomButton
                  type='button'
                  content='Back'
                  variant='outlined'
                  navigateTo='/signup'
                  handleClick={handlePrevious}
                  className={prevBtnClass}
                />
                <Button
                  type='submit'
                  content='Next'
                  variant='outlined'
                  loading={loading}
                  className={nextBtnClass}>
                  Next
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </SignupWrapper>
    </>
  );
};

export default UserInfo;
