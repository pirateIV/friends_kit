import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';

const UserInfo = () => {
  const dispatch = useDispatch();
  dispatch(setProgress(25));

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
  };

  return (
    <>
      <SignupWrapper title='Tell us more about you.' id='user-info'>
        <Formik initialValues onSubmit={(values) => console.log(values)}>
          {({ errors, touched }) => (
            <Form className='space-y-4'>
              <div className='max-w-[5400px]'>
                <section className='bg-white'>
                  <Field type='text' className='block' />
                  <Field type='text' className='block' />
                  <Field type='password' className='block' />
                </section>

                <div className='btn-group'>
                  <button type='button'>Back</button>
                  <button type='submit'>Next</button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </SignupWrapper>
    </>
  );
};

export default UserInfo;
