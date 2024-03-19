import AccountCard from '../AccountCard/AccountCard';
import SignupWrapper from '../../common/SignupWrapper';

import { accountTypes } from './index';

const SelectAccount = () => {
  return (
    <SignupWrapper title='Welcome, select an account type.' id='select-account'>
      <div className='pt-5 max-w-[1040px] w-full' id='select-acct-type'>
        <div className='cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4'>
          {accountTypes.map((account) => (
            <AccountCard
              key={account.id}
              type={account.type}
              title={account.title}
              id={`part-${account.id}`}
              imgSrc={account.illustration}
            />
          ))}
        </div>
      </div>
    </SignupWrapper>
  );
};

export default SelectAccount;
