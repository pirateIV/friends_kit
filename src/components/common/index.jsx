import { useState } from 'react';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const isInputVisible = () => {
  const [inputVisible, setInputVisible] = useState(false);

  return (
    <FontAwesomeIcon
      icon={inputVisible ? faEyeSlash : faEye}
      className='text-gray-600'
      onClick={() => setInputVisible(!inputVisible)}
    />
  );
};

export const inputClass =
  'flex items-center w-full text-left px-4 py-3 h-11 mt-1 bg-white ';
