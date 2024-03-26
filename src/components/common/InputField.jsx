import { ErrorMessage, useField } from 'formik';
import { Input } from '@material-tailwind/react';

import { inputClass } from './index';
import useInputState from '../../hooks/useInputState';

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const { iconType, inputType } = useInputState(type);

  return (
    <>
      <div className='relative mb-8'>
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
        <ErrorMessage
          name={type}
          component='div'
          className='absolute end-2 text-red-500  text-xs mt-1'
        />
      </div>
    </>
  );
};

export default InputField;
