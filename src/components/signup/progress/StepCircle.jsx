import { useSelector } from 'react-redux';
import { currentProgress } from '@/redux/reducers/progressReducer';

const StepCircle = ({ step }) => {
  const progress = useSelector(currentProgress);

  const compareProgress = (caseOne, caseTwo) =>
    progress >= step.progress ? caseOne : caseTwo;

  const stepClasses = `relative flex-center rounded-full dark:bg-white bg-[#242d3c] w-[38px] h-[38px]
     dark:border ${compareProgress(
       'border-[#3d70b2]',
       'border-[#e8e8e8]'
     )} pointer-events-none z-20`;

  return (
    <div
      id={`step-dot-${step.id}`}
      className={stepClasses}
      data-progress={`${step.progress}`}>
      <div className={compareProgress('text-[#3d70b2]', 'text-[#b9b9b9]')}>
        {step.icon}
      </div>
    </div>
  );
};

export default StepCircle;
