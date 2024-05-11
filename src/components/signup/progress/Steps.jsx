import StepCircle from "./StepCircle";
import PropTypes from "prop-types";

const Steps = ({ steps }) => {
  return (
    <>
      {steps.map((step) => (
        <StepCircle key={step.id} step={step} />
      ))}
    </>
  );
};

Steps.propTypes = {
  steps: PropTypes.array,
};

export default Steps;
