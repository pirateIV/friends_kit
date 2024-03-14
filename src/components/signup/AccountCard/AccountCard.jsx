import { Link, useNavigate } from 'react-router-dom';
import AccountCardButton from './AccountCardButton';

const AccountCard = ({ id, type, title, imgSrc }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='card justify-self-stretch p-3'>
        <div className='bg-white border border-slate-200 p-[30px] text-center rounded-md'>
          <div className='img-illustration w-full' id={id}>
            <img
              src={imgSrc}
              className='max-w-full h-auto scale-125 -translate-y-[20%]'
              alt='company'
            />
          </div>
          <div className='card-content'>
            <h3 className='font-montserrat font-semibold py-2 text-[#344258]'>{title}</h3>
            <p className='text-sm text-[#a2a5b9]'>{`Create a ${type} account to be able to do some awesome things.`}</p>
            <div className='mt-5'>
              <AccountCardButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;
