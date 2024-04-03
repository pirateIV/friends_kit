import { useDispatch, useSelector } from 'react-redux';
import Navigation from '@/components/NavigationBar/Navigation';
import { useEffect } from 'react';
import { getAllUsers } from '@/auth/reducers/users/usersSlice';

import banner from '../assets/images/default-profile-banner.png';
import jenna from '@/assets/images/jenna.webp';

import userAvatar from '../assets/images/signup/avatar-w.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <main>
      <div className='relative w-full h-full bg-[#f4f4f4]'>
        <Navigation />
        <Outlet />{' '}
        <Link to='/profile-minimal' >Visit profile minimal</Link> <br />
        <Link to='/user-profile' >Visit user profile</Link>
      </div>
    </main>
  );
};

export default Root;
