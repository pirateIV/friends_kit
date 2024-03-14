import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useNavigate } from 'react-router-dom';

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
              <section className='bg-white  border border-slate-200 mt-4 shadow-sm rounded-lg p-6'>
                <div className='mb-6'>
                  <label
                    htmlFor='firstname'
                    className='block text-sm font-medium text-gray-700'>
                    First Name
                  </label>
                  <Field
                    type='text'
                    id='firstname'
                    name='firstname'
                    className='block w-full text-left px-4 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none text-sm  shadow-sm rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
                    placeholder='Enter your first name'
                  />
                  <ErrorMessage
                    name='firstname'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='lastname'
                    className='block text-sm font-medium text-gray-700'>
                    Last Name
                  </label>
                  <Field
                    type='text'
                    id='lastname'
                    name='lastname'
                    className='block w-full text-left px-4 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none text-sm  shadow-sm rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
                    placeholder='Enter your last name'
                  />
                  <ErrorMessage
                    name='lastname'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='mb-6'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700'>
                    Email Address
                  </label>
                  <Field
                    type='email'
                    id='email'
                    name='email'
                    autoComplete='email'
                    className='block w-full text-left px-4 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none text-sm  shadow-sm rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
                    placeholder='you@example.com'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
              </section>

              <div className='flex justify-end gap-8 mt-4'>
                <button
                  type='button'
                  className='bg-white border text-gray-600 border-gray-300 w-20 text-sm leading-6 font-medium py-2 px-3 rounded-lg focus:outline-none focus:ring focus:ring-offset-1 focus:ring-gray-300'
                  onClick={() => prev()}>
                  Back
                </button>
                <button
                  type='button'
                  className='bg-[#3d70b2] w-20 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg focus:ring focus:outline-none focus:ring-offset-1 focus:ring-[#3d70b279]'
                  onClick={() => next()}>
                  Next
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </SignupWrapper>
    </>
  );
};

export default UserInfo;
