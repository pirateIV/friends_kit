import { Button } from '@material-tailwind/react';
import mailbox from '../../../assets/images/signup/cards/mailbox.svg';

const AcctCreatedContent = ({ next }) => {
  const btnClass = 'block px-5 py-1.5 mx-auto max-w-[280px] font-sans w-full bg-blue-600 !text-white text-sm rounded-lg text-[#5596e6] border border-[#5596e6] hover:text-white hover:bg-[#5596e6] focus:outline-none'

  return (
    <section className='space-y-4'>
      <img
        src={mailbox}
        className='max-w-[120px] w-full mx-auto'
        alt='mailbox illustration'
      />
      <div className='success-text max-w-[370px] mx-auto text-center'>
        <h5 className='font-medium text-[#393a4f]'>
          Congratz, you successfully created your account.
        </h5>
        <small className='text-[#999] text-[.9rem]'>
          We just sent you a confirmation email. Please confirm your account within 24
          hours.
        </small>
      </div>
      <form>
        <Button
          type='submit'
          className={`${btnClass} lowercase first-letter:uppercase`}
          onClick={() => next()}
          >
          Let Me in
        </Button>
      </form>
    </section>
  );
};

export default AcctCreatedContent;
