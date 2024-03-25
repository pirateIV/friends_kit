import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const useInputState = (type) => {
  const [inputVisible, setInputVisible] = useState(false);

  const icon = () => {
    return (
      <FontAwesomeIcon
        className='text-gray-600 dark:text-white' 
        icon={inputVisible ? faEyeSlash : faEye}
        onClick={() => setInputVisible(!inputVisible)}
      />
    );
  };
  const inputType = !inputVisible ? type : 'text';
  const iconType = type === 'password' ? icon() : null;

  return { iconType, inputType };
};

export default useInputState;
