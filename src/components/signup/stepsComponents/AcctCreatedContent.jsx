import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { btnClass } from '.';
// import mailbox from '@/assets/images/signup/cards/mailbox.svg';
import { createNewUser } from '@/auth/reducers/users/usersSlice';
import { deleteUserFromStorage } from '@/auth/reducers/user/userSlice';
import sprite from '../../../assets/sprites/signup_sprites.svg';  

const AcctCreatedContent = ({ next }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(createNewUser(user));
    dispatch(deleteUserFromStorage());
    next();
  };

  return (
    <section className='space-y-4'>
      {/* <img
        src={mailbox}
        className='max-w-[120px] w-full mx-auto'
        alt='mailbox illustration'
      /> */}
      <svg width='300' height='150'>
        <use href={`${sprite}#mailbox`}></use> 
      </svg>
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
          Let me in
        </Button>
      </form>
    </section>
  );
};

AcctCreatedContent.propTypes = {
  next: PropTypes.func.isRequired,
};

export default AcctCreatedContent;
