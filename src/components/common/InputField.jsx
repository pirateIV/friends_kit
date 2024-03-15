import { ErrorMessage, Field } from 'formik';

const InputField = ({ label, type, name, placeholder, htmlFor }) => {
  return (
    <>
      <div className='mb-6'>
        <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <Field
          type={type}
          id={name}
          name={name}
          autoComplete={type}
          className='block w-full text-left px-4 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none text-sm  shadow-sm rounded-lg dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700'
          placeholder={placeholder}
        />
        <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
      </div>
    </>
  );
};

export default InputField;
