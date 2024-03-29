import { Button } from '@material-tailwind/react';

import { btnClass } from '.';
import mailbox from '@/assets/images/signup/cards/mailbox.svg';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '@/auth/reducers/users/usersSlice';
import axios from 'axios';

const AcctCreatedContent = ({ next }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(createNewUser(user));
    next();
  };

  return (
    <section className='space-y-4'>
      <img
        src={mailbox}
        className='max-w-[120px] w-full mx-auto'
        alt='mailbox illustration'
      />
      <div className='success-text max-w-[370px] mx-auto text-center'>
        <h5 className='font-medium text-[#393a4f] dark:text-[#fafafa]'>
          Congratz, you successfully created your account.
        </h5>
        <small className='text-[#999] text-[.9rem]'>
          We just sent you a confirmation email. Please confirm your account within 24
          hours.
        </small>
      </div>
      <form onSubmit={submitForm} encType='multipart/form-data'>
        <Button type='submit' className={`${btnClass} lowercase first-letter:uppercase`}>
          {/* // onClick={() => submitData()} Let Me in */} Let me in
        </Button>
      </form>
    </section>
  );
};

export default AcctCreatedContent;
