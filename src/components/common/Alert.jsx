import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = ({ children }) => {
  return (
    <div
      class='flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800'
      role='alert'>
      <FontAwesomeIcon className='text-red-500 h-3 w-3' icon={faInfoCircle} />
      <span class='sr-only'>Info</span>
      <div>
        <span class='font-medium'>{children}</span>
      </div>
    </div>
  );
};

export default Alert;
