import { Field } from 'formik';

const RememberMe = () => {
  return (
    <div className='flex items-center py-5 space-x-2.5'>
      <Field
        type='checkbox'
        name='remember'
        className='bg-white accent-orange-500 focus:border-orange-500'
        id='remember_me'
      />
      <label htmlFor='remember_me' className='text-sm text-gray-500 font-semibold'>
        Remember my preference
      </label>
    </div>
  );
};

export default RememberMe;
