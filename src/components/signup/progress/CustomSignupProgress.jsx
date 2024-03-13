import Steps from './Steps';
import ProgressBar from './ProgressBar';
import { user, profile, lock, account, flag } from '../../../assets/images/signup/index';

const steps = [
  { id: 1, icon: account },
  { id: 2, icon: user },
  { id: 3, icon: profile },
  { id: 4, icon: lock },
  { id: 5, icon: flag },
];

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
