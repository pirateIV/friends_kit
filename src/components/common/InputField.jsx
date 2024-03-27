import { ErrorMessage, useField } from 'formik';
import { Input } from '@material-tailwind/react';

import { inputClass, inputErrorClass } from './index';
import useInputState from '../../hooks/useInputState';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const { iconType, inputType } = useInputState(type);

  return (
    <>
      <div className='relative mb-8'>
        <div>
          <input
            {...field}
            {...props}
            class='peer h-full w-full rounded-[7px] border border-red-500 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-red-500 placeholder-shown:border-t-red-500 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
            placeholder=' '
            type={inputType}
          />
          <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Input Error
          </label>
          {/* <Input
            size='lg'
            {...field}
            {...props}
            color={'meta.error' ? null : 'blue'}
            label={label}
            icon={iconType}
            type={inputType}
            className={meta.error ? inputErrorClass : inputClass}
          /> */}
          {/* {meta.error && (
            <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-red-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-red-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-red-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-red-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Input Error
            </label>
          )} */}
        </div>
        {meta.touched && meta.error && (
          <div className='absolute end-0 text-red-500 inline-flex items-center gap-1  mt-1'>
            <FontAwesomeIcon className='text-red-500 h-3 w-3' icon={faInfoCircle} />
            <small className='text-xs mt-0.5'> {meta.error}</small>
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
