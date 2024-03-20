import { useDispatch, useSelector } from 'react-redux';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import CustomButtonGroup from '../../common/CustomButtonGroup';
import { useNavigate } from 'react-router-dom';
import PasswordInput from '../Form/PasswordInput';
import { useEffect } from 'react';
import { nextBtnClass, prevBtnClass } from '.';
import { getUserInfo, setUserPassword } from '../../../auth/reducers/users/userSlice';
import { ButtonGroup } from '@material-tailwind/react';
import CustomButton from '../../common/CustomButton';

const AuthorizeAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { password, confirmPassword } = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(setProgress(75));
  }, []);
  const prev = () => navigate('/signup/upload-profile');
  const next = () => navigate('/signup/created');

  const handleSubmit = (values) => {
    dispatch(setUserPassword(values));
    next();
  };

  return (
    <SignupWrapper id='authorize' title='Secure your account.'>
      <Formik
        initialValues={{ password, confirmPassword }}
        onSubmit={(values) => handleSubmit(values)}>
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
              <button type='submit' className={nextBtnClass}>
                Next
              </button>
            </ButtonGroup>
          </Form>
        )}
      </Formik>
    </SignupWrapper>
  );
};

export default AuthorizeAccount;
