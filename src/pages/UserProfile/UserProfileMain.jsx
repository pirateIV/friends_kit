import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import jenna from '@/assets/images/jenna.webp';
import { ClockIcon } from '@radix-ui/react-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PlusIcon from '@/shared/components/icons/PlusIcon';
import banner from '@/assets/images/default-profile-banner.png';

const UserProfileMain = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <header className='relative'>
        <section
          className='mt-1 banner profile-cover h-[327px] w-full bg-cover group'
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
          }}>
          <div className='absolute top-0 w-full h-full bg-black/20 z-20 transition-colors group-hover:bg-black/40'></div>
          <span
            className='absolute top-2.5 text-white left-3 text-xl me-3 py-1.5 ps-2 z-30 group-hover:scale-90 !hover:opacity-100'
            style={{ transition: 'transform 0.2s ease-in' }}>
            <FontAwesomeIcon icon={faCamera} />
          </span>
          <button className='absolute border border-white py-1.5 ps-9 pe-3 text-white rounded-sm top-3 left-3 z-30  transition-opacity opacity-0 group-hover:opacity-100 text-sm'>
            Edit cover image
          </button>

          <div className='user-avatar absolute h-[130px] w-[130px] mx-auto flex justify-center z-30 -bottom-[65px] inset-x-0'>
            <img src={jenna} className='rounded-full' alt='user-profile-pic' />
            <div className='relative'>
              <a className='upload-button absolute bottom-0 right-0 flex-center h-[36px] w-[36px] text-white rounded-full bg-blue-800 cursor-pointer hover:bg-blue-700'>
                <PlusIcon />
              </a>
            </div>
          </div>
        </section>
      </header>
      <div className='profile-menu flex items-center justify-between mt-3'>
        <div className='*:border *:border-gray-400 *:py-2 *:w-28 *:rounded-lg *:bg-white flex gap-2 *:text-gray-500'>
          <NavLink
            to='/timeline'
            className='hover:text-gray-700 text-sm text-center font-medium hover:border-gray-500'>
            Timeline
          </NavLink>
          <NavLink
            to='/user-profile/about'
            className='hover:text-gray-700 text-sm text-center font-medium hover:border-gray-500'>
            About
          </NavLink>
        </div>
        <div className='*:border *:border-gray-400 *:py-2 *:w-28 *:rounded-lg *:bg-white flex gap-2 *:text-gray-500'>
          <NavLink
            to='/user-profile/friends'
            className='hover:text-gray-700 text-sm text-center font-medium hover:border-gray-500'>
            Friends
          </NavLink>
          <button className='hover:text-gray-700 text-sm font-medium hover:border-gray-500'>
            Photos
          </button>
        </div>
      </div>

      <header className='profile-sub-header mt-5 text-center flex items-center justify-between'>
        <div className='friends w-1/3 text-start'>
          <h2 className='font-bold text-[1.65rem] font-montserrat text-[#393a4f]'>
            3.4k{' '}
          </h2>
          <small className='uppercase text-xs text-gray-500 font-medium'>Friends</small>
        </div>
        <div className='user-name w-1/3 text-center'>
          <h2 className='font-bold text-[1.65rem] text-[#393a4f]'>Jenna Davis</h2>
          <small className='text-gray-500'>Media Influencer</small>
        </div>
        <div className='w-1/3 text-end text-sm font-medium'>
          <button className='inline-flex items-center gap-1 bg-white border border-gray-400 px-4 py-1.5 rounded-lg'>
            <ClockIcon />
            <span>History</span>
          </button>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default UserProfileMain;
