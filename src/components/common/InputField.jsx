import { useField } from 'formik';
import { Input } from '@material-tailwind/react';
import useInputState from '@/hooks/useInputState';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const { iconType, inputType } = useInputState(type);

  return (
    <>
      <div className='relative mb-8'>
        <div className='relative h-10 w-full'>
          <Input
            size='lg'
            {...field}
            {...props}
            label={label}
            icon={iconType}
            type={inputType}
            className='!outline-none dark:!text-white'
            color={meta.error ? 'red' : 'blue'}
          />
        </div>
        {meta.error && (
          <dl className='absolute end-0 text-red-500 inline-flex items-center gap-1  mt-1'>
            <FontAwesomeIcon className='text-red-500 h-3 w-3' icon={faInfoCircle} />
            <small className='text-xs mt-0.5'> {meta.error}</small>
          </dl>
        )}
      </div>
    </>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
