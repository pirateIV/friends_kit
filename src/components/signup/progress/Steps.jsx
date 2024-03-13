import React from 'react';
import StepDot from './StepDot';

const Steps = ({ steps }) => {
  return (
    <>
      {steps.map((step) => (
        <StepDot step={step} />
      ))}
    </>
  );
};

export default Steps;
