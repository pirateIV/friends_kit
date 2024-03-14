import { useDispatch } from 'react-redux';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import ButtonGroup from '../../common/ButtonGroup';
import { useNavigate } from 'react-router-dom';

const AuthorizeAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  dispatch(setProgress(75));

  const prev = () => navigate('/signup/upload-profile');
  const next = () => navigate('/signup/created')

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
            <section className='bg-white  border border-slate-200 mt-4 shadow-sm rounded-lg p-6'>
              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'>
                  Password
                </label>
                <Field
                  type='text'
                  id='password'
                  name='password'
                  autoComplete='current-password'
                  className='block w-full text-left px-4 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none text-sm  shadow-sm rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
                  placeholder='Enter password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
              <div className='mb-6'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'>
                  Confirm Password
                </label>
                <Field
                  type='text'
                  id='confirmPassword'
                  name='confirmPassword'
                  autoComplete='current-password'
                  className='block w-full text-left px-4 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none text-sm  shadow-sm rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
                  placeholder='re-enter your password'
                />
                <ErrorMessage
                  name='confirmPassword'
                  component='div'
                  className='text-red-500 text-sm mt-1'
                />
              </div>
            </section>

            <ButtonGroup prev={prev} next={next} />
          </Form>
        )}
      </Formik>
    </SignupWrapper>
  );
};

export default AuthorizeAccount;
