import React from 'react';

const DropdownItem = ({ children }) => {
  return (
    <div>
      <a className='profile relative flex items-center gap-4 py-2 px-4 my-2 cursor-pointer hover:bg-gray-100/70'>
        {children}{' '}
      </a>
    </div>
  );
};

export default DropdownItem;
