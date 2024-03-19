import { ErrorMessage } from 'formik';
import { Input } from '@material-tailwind/react';

import { inputClass, isInputVisible } from './index';

const InputField = ({ label, type, name }) => {
  return (
    <>
      <div className='mb-6'>
        <div>
          <Input
            id={name}
            type={type}
            name={name}
            variant='outlined'
            icon={isInputVisible()}
            autoComplete={type}
            className={inputClass}
            label={label}
          />
        </div>
        <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
      </div>
    </>
  );
};

export default InputField;
