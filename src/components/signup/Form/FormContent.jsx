import InputField from '../../common/InputField';

const FormContent = () => {
  return (
    <section className='bg-white  border border-slate-200 mt-4 shadow-sm rounded-lg p-6'>
      <InputField
        htmlFor='firstname'
        label='First Name'
        type='text'
        name='firstname'
        placeholder='Enter your first name'
      />
      <InputField
        htmlFor='lastname'
        label='Last Name'
        type='text'
        name='lastname'
        placeholder='Enter your last name'
      />
      <InputField
        htmlFor='email'
        label='Email Address'
        type='emai;'
        name='email'
        autoComplete='email'
        placeholder='you@example.com'
      />
    </section>
  );
};

export default FormContent;
