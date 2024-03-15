import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from '../../common/ButtonGroup';
import InputField from '../../common/InputField';
import FormContent from '../Form/FormContent';

const UserInfo = () => {
  const dispatch = useDispatch();
  dispatch(setProgress(25));
  const navigate = useNavigate();

  const prev = () => {
    dispatch(setProgress(0));
    navigate('/signup');
  };
  const next = () => {
    dispatch(setProgress(50));
    navigate('/signup/upload-profile');
  };

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
