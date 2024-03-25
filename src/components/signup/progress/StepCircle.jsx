import { useSelector } from 'react-redux';
import { currentProgress } from '@/redux/reducers/progressReducer';

const StepCircle = ({ step }) => {
  const progress = useSelector(currentProgress);

  const compareProgress = (caseOne, caseTwo) =>
    progress >= step.progress ? caseOne : caseTwo;

  const stepClasses = `relative flex-center rounded-full bg-white dark:bg-[#242d3c] w-[38px] h-[38px]
     dark:border ${compareProgress(
       'border-[#3d70b2] dark:border-[#5596e6]',
       'border-[#e8e8e8] dark:border-[#334056]'
     )} pointer-events-none z-20`;

  return (
    <div
      id={`step-dot-${step.id}`}
      className={stepClasses}
      data-progress={`${step.progress}`}>
      <div className={compareProgress('text-[#3d70b2] dark:text-[#5596e6]', 'text-[#b9b9b9]')}>
        {step.icon}
      </div>
    </div>
  );
};

export default StepCircle;
