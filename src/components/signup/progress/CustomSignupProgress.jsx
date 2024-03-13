import Steps from './Steps';
import ProgressBar from './ProgressBar';
// import { steps } from '../../../assets/images/signup/imports';

import FlagIcon from '../../../shared/components/icons/FlagIcon';
import UserIcon from '../../../shared/components/icons/UserIcon';
import LockIcon from '../../../shared/components/icons/LockIcon';
import ProfileIcon from '../../../shared/components/icons/ProfileIcon';
import AccountIcon from '../../../shared/components/icons/AccountIcon';

const steps = [
  { id: 1, icon: <AccountIcon /> },
  { id: 2, icon: <UserIcon /> },
  { id: 3, icon: <ProfileIcon /> },
  { id: 4, icon: <LockIcon /> },
  { id: 5, icon: <FlagIcon /> },
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
