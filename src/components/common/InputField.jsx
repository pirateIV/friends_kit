import { Input } from '@material-tailwind/react';
import { ErrorMessage, Field } from 'formik';

const InputField = ({ label, type, name, placeholder, htmlFor }) => {
  const inputClass =
    'block w-full text-left px-4 py-3 h-11 mt-1 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-blue-600 text-sm shadow-sm rounded-lg';
  return (
    <>
      <div className='mb-6'>
        <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
        <div>
          <Input
            id={name}
            type={type}
            name={name}
            variant='outlined'
            autoComplete={type}
            className={inputClass}
            placeholder={placeholder}
          />
        </div>
        <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
      </div>
    </>
  );
};

export default InputField;
