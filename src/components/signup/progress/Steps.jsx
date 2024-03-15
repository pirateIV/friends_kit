;
import StepDot from './StepDot';

const Steps = ({ steps }) => {
  return (
    <>
      {steps.map((step) => (
        <StepDot key={step.id} step={step} />
      ))}
    </>
  );
};

export default Steps;
