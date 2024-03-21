import { ErrorMessage, useField } from 'formik';
import { Input } from '@material-tailwind/react';

import { inputClass } from './index';
import useInputState from '../../hooks/useInputState';

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const { iconType, inputType } = useInputState(type);

  return (
    <>
      <div className='mb-6'>
        <div>
          <Input
            size='lg'
            {...field}
            {...props}
            color='blue'
            label={label}
            icon={iconType}
            type={inputType}
            className={inputClass}
          />
        </div>
        {meta.touched && meta.error && (
          <div className='text-red-500 text-sm mt-1'>{meta.error}</div>
        )}
      </div>
    </>
  );
};

export default InputField;
