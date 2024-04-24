import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = ({ children }) => {
  return (
    <div className='alert' role='alert'>
      <FontAwesomeIcon className='text-red-500 h-3 w-3' icon={faInfoCircle} />
      <span className='sr-only'>Info</span>
      <div className='ps-5'>
        <span className='font-normal'>{children}</span>
      </div>
    </div>
  );
};

export default Alert;
