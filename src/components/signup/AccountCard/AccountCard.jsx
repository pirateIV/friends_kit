import PropTypes from 'prop-types';
import AccountCardButton from './AccountCardButton';

const AccountCard = ({ id, type, title, imgSrc }) => {
  return (
    <>
      <div className='card justify-self-stretch p-3'>
        <div className='bg-white shadow-mui-1 p-[30px] text-center rounded-md dark:bg-[#202836]'>
          <div className='img-illustration w-full' id={id}>
            <img
              src={imgSrc}
              className='max-w-full h-auto scale-125 -translate-y-[20%]'
              height='253'
              width='328'
              alt='company'
            />
          </div>
          <div className='card-content'>
            <h3 className='font-montserrat font-semibold py-2 text-[#344258] dark:text-[#fafafa]'>
              {title}
            </h3>
            <p className='text-sm text-gray-500'>
              {`Create a ${type} account to be able to do some awesome things.`}
            </p>
            <div className='mt-5'>
              <AccountCardButton title={title} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountCard.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default AccountCard;
