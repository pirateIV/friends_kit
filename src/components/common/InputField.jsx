import { ErrorMessage } from 'formik';
import { Input } from '@material-tailwind/react';

import { inputClass } from './index';
import useInputState from '../../hooks/useInputState';

const InputField = ({ label, type, name }) => {
  const { iconType, inputType } = useInputState(type);

  return (
    <>
      <div className='mb-6'>
        <div>
          <Input
            id={name}
            name={name}
            label={label}
            icon={iconType}
            type={inputType}
            variant='outlined'
            autoComplete={type}
            className={inputClass}
          />
        </div>
        <ErrorMessage name={name} component='div' className='text-red-500 text-sm mt-1' />
      </div>
    </>
  );
};

export default InputField;
