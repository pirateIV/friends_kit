import React from 'react';
import banner from '@/assets/images/default-profile-banner.png';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserProfileMain = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <header className='relative'>
        <section
          className='mt-1 banner profile-cover h-[327px] bg-cover'
          style={{
            backgroundImage: `url(${banner})`,
          }}></section>
        <div className='group absolute top-0 w-full h-full bg-black/20 z-20 transition-colors hover:bg-black/40'></div>
        <span className='absolute top-3text-white left-3 text-xl me-3 py-1.5 ps-2 z-30'>
          <FontAwesomeIcon icon={faCamera}/>
        </span>
        <button className='absolute border border-white py-1.5 ps-9 pe-3 *:text-white text-white rounded-sm top-3 left-3 z-30'>
          Edit cover image
        </button>
      </header>
    </div>
  );
};

export default UserProfileMain;
