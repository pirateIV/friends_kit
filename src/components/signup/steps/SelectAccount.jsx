// import img from '../../../assets/images/signup/cards/type-2'
// import img from '../../../assets/images/signup/cards/type-3'
import type1 from '../../../assets/images/signup/cards/type-1.svg';
import type2 from '../../../assets/images/signup/cards/type-2.svg';
import type3 from '../../../assets/images/signup/cards/type-3.svg';
import type1Bg from '../../../assets/images/signup/cards/type-1-bg.svg';
import type2Bg from '../../../assets/images/signup/cards/type-2-bg.svg';
import type3Bg from '../../../assets/images/signup/cards/type-3-bg.svg';

const SelectAccount = () => {
  return (
    <section id='select-account'>
      <div
        className='flex flex-col items-center justify-center'
        style={{ height: 'calc(100vh - 133px)' }}>
        <h3 className='block font-montserrat font-semibold text-lg text-center'>
          Welcome, select an account type.
        </h3>
        <div className='pt-5 max-w-[1040px] w-full' id='select-acct-type'>
          <div className='cards grid grid-cols-3 mt-4'>
            <div className='card justify-self-stretch p-3'>
              <div className='bg-white border border-slate-300 p-[30px]'>
                <div className='img-illustration w-full'>
                  <img src={type1} className='max-w-full h-auto' alt='company' />
                </div>
              </div>
            </div>
            <div className='card justify-self-stretch p-3'>
              <div className='bg-white border border-slate-300 p-[30px]'>
                <div className='img-illustration w-full'>
                  <img src={type2} className='max-w-full h-auto' alt='company' />
                </div>
              </div>
            </div>
            <div className='card justify-self-stretch p-3'>
              <div className='bg-white border border-slate-300 p-[30px]'>
                <div className='img-illustration w-full'>
                  <img src={type3} className='max-w-full h-auto' alt='company' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectAccount;
