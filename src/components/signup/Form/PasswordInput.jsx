import InputField from '../../common/InputField';

const PasswordInput = () => {
  return (
    <section className='bg-white shadow-tiny mt-4 rounded-lg p-6'>
      <InputField
        label='Password'
        htmlFor='password'
        type='password'
        autoComplete='current-password'
        placeholder='Enter password'
        name='password'
      />
      <InputField
        label='Confirm Password'
        htmlFor='password'
        type='password'
        autoComplete='current-password'
        placeholder='re-enter your password'
        name='confirmPassword'
      />
    </section>
  );
};

export default PasswordInput;
