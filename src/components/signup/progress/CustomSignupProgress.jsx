import Steps from './Steps';
import ProgressBar from './ProgressBar';
import { steps } from '../../../assets/images/signup/index';

const CustomSignupProgress = () => {
  return (
    <>
      <div className='p-[30px]' id='progress'>
        <ProgressBar>
          <Steps steps={steps} />
        </ProgressBar>
      </div>
    </>
  );
};

export default CustomSignupProgress;
