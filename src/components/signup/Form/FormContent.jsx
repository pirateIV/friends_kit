import InputField from '../../common/InputField';

const FormContent = () => {
  return (
    <section className='bg-white mt-4 shadow-tiny rounded-lg p-6 dark:bg-[#202836]'>
      <InputField
        label='First Name'
        type='text'
        name='firstName'
        placeholder='Enter your first name'
      />
      <InputField
        label='Last Name'
        type='text'
        name='lastName'
        placeholder='Enter your last name'
      />
      <InputField
        label='Email Address'
        type='email'
        name='email'
        autoComplete='email'
        placeholder='you@example.com'
      />
    </section>
  );
};

export default FormContent;
