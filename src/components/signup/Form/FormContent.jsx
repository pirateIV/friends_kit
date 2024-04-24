import InputField from '../../common/InputField';

const cs = 'bg-white mt-4 shadow-tiny rounded-lg p-6 dark:bg-[#202836]'

const FormContent = () => (
  <section className={cs}>
    {[
      {
        label: 'First Name',
        type: 'text',
        name: 'firstName',
        placeholder: 'Enter your first name',
      },
      {
        label: 'Last Name',
        type: 'text',
        name: 'lastName',
        placeholder: 'Enter your last name',
      },
      {
        label: 'Email Address',
        type: 'email',
        name: 'email',
        autoComplete: 'email',
        placeholder: 'you@example.com',
      },
    ].map((input, index) => (
      <InputField key={index} {...input} />
    ))}
  </section>
);

export default FormContent;
