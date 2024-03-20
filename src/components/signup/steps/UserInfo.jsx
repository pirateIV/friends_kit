import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormContent from '../Form/FormContent';
import CustomButtonGroup from '../../common/CustomButtonGroup';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useEffect, useState } from 'react';
import { setUserInfo } from '../../../auth/reducers/users/userSlice';
import { nextBtnClass, prevBtnClass } from '.';
import { Button, ButtonGroup } from '@material-tailwind/react';
import CustomButton from '../../common/CustomButton';
import useLoadingState from '../../../hooks/useLoading';

const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formDetails, setFormDetails] = useState(null);
  const { handleLoading } = useLoadingState();


  return (
    <>
      <SignupWrapper title='Tell us more about you.' id='user-info'>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
          }}
          onSubmit={(values) => handleNext(values)}>
          {() => (
            <Form className='w-full max-w-[540px]'>
              <FormContent />
              <ButtonGroup className='flex justify-end gap-1 mt-4 divide-none'>
                <CustomButton
                  type='button'
                  content='Back'
                  variant='outlined'
                  handleClick={handleClick}
                  className={prevBtnClass}
                />
                <button type='submit' content='Next' className={nextBtnClass}>Next</button>
                {/* <CustomButton 
                  type='submit'
                  content='Next'
                  variant='filled'
                  className={nextBtnClass}
                /> */}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
      </SignupWrapper>
    </>
  );
};

export default UserInfo;
