import StepCircle from './StepCircle';

const Steps = ({ steps }) => {
  return (
    <>
      {steps.map((step) => (
        <StepCircle key={step.id} step={step} />
      ))}
    </>
  );
};

export default Steps;
