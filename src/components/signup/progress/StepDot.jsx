const StepDot = ({ step }) => {
  const stepClasses = `relative flex items-center justify-center rounded-full bg-white w-[38px] h-[38px]
     border border-[#e8e8e8] pointer-events-none z-20`;

  return (
    <div className={stepClasses} id={`step-dot-${step.id}`}>
      {step.icon}
    </div>
  );
};

export default StepDot;
