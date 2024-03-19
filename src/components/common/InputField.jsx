import { Input } from '@material-tailwind/react';
import { ErrorMessage, Field } from 'formik';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({ label, type, name, placeholder, htmlFor }) => {
  const inputClass = 'flex items-center w-full text-left px-4 py-3 h-11 mt-1 bg-white ';
  return (
    <>
      <div className='mb-6'>
        {/* <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700'>
          {label}
        </label> */}

        <div>
          <Input
            id={name}
            type={type}
            name={name}
            variant='outlined'
            icon={<FontAwesomeIcon icon={faEye} className='text-gray-600' />}
            autoComplete={type}
            className={inputClass}
            label={placeholder}
          />
        </div>
        <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
      </div>
    </>
  );
};

export default InputField;
