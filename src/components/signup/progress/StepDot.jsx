import React from 'react';

const StepDot = ({ step }) => {
  return (
    <div
      className='relative flex items-center justify-center bg-white w-[38px] h-[38px]  border border-[#e8e8e8] pointer-events-none rounded-full z-20'
      id={`step-dot-${step.id}`}>
      <img src={step.icon} width='16' height='16'  alt='icon' />
    </div>
  );
};

export default StepDot;
