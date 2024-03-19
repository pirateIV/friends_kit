import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormContent from '../Form/FormContent';
import ButtonGroup from '../../common/ButtonGroup';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useEffect } from 'react';

const UserInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 useEffect(() => {
  dispatch(setProgress(25));
 }, [])
  const prev = () => navigate('/signup');
  const next = () => navigate('/signup/upload-profile');

  return (
    <>
      <SignupWrapper title='Tell us more about you.' id='user-info'>
        <Formik
          initialValues={{
            firstname: '',
            lastname: '',
            email: '',
          }}
          onSubmit={(values) => console.log(values)}>
          {({ errors, touched }) => (
            <Form className='w-full max-w-[540px]'>
              <FormContent />
              <ButtonGroup prev={prev} next={next} />
            </Form>
          )}
        </Formik>
      </SignupWrapper>
    </>
  );
};

export default UserInfo;
