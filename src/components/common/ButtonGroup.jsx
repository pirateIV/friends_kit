import React from 'react';

const ButtonGroup = ({ prev, next }) => {
  return (
    <div className='flex justify-end gap-8 mt-4'>
      <button
        type='button'
        className='bg-white border text-gray-600 border-gray-300 w-20 text-sm leading-6 font-medium py-2 px-3 rounded-lg focus:outline-none focus:ring focus:ring-offset-1 focus:ring-gray-300'
        onClick={() => prev()}>
        Back
      </button>
      <button
        type='button'
        className='bg-[#3d70b2] w-20 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg focus:ring focus:outline-none focus:ring-offset-1 focus:ring-[#3d70b279]'
        onClick={() => next()}>
        Next
      </button>
    </div>
  );
};

export default ButtonGroup;
