import DropdownItem from './DropdownItem';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@material-tailwind/react';

const Profile = () => {
  return (
    <>
      <hr />
      <DropdownItem>
        <Avatar
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          className='h-[35px] w-[35px] rounded-full'
          alt=''
        />
        <div className='text-[#393a4f]' style={{ lineHeight: 1.1 }}>
          <h4 className='text-[.8rem] font-medium' id='user-name'>
            John Doe
          </h4>
          <small className='text-[.75rem]'>Main account</small>
        </div>
        <FontAwesomeIcon
          icon={faCheck}
          className='absolute right-8 w-4 h-4 text-blue-400 '
        />
      </DropdownItem>
      <hr />
    </>
  );
};

export default Profile;
