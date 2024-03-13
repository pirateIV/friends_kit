import AccountCard from '../AccountCard';
import { accountTypes } from '../../../assets/images/signup/imports';

const SelectAccount = () => {
  return (
    <section id='select-account'>
      <div
        className='flex flex-col items-center justify-center'
        style={{ height: 'calc(100vh - 133px)' }}>
        <h3 className='block font-montserrat font-semibold text-lg text-center text-[#344258]'>
          Welcome, select an account type.
        </h3>
        <div className='pt-5 max-w-[1040px] w-full' id='select-acct-type'>
          <div className='cards grid grid-cols-3 mt-4'>
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
      </div>
    </section>
  );
};

export default SelectAccount;
