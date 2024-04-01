import React from 'react';
import banner from '@/assets/images/default-profile-banner.png';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserProfileMain = () => {
  return (
    <div className='max-w-[1140px] mx-auto'>
      <header className='relative'>
        <section
          className='mt-1 banner profile-cover h-[327px] w-full bg-cover'
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
          }}>
          <div className='peer absolute top-0 w-full h-full bg-black/20 z-20 transition-colors hover:bg-black/40'></div>
          <span className='absolute top-3 text-white left-3 text-xl me-3 py-1.5 ps-2 z-30 peer-hover:scale-90 transition-transform !hover:opacity-100'>
            <FontAwesomeIcon icon={faCamera} />
          </span>
          <button className='absolute border border-white py-1.5 ps-9 pe-3 text-white rounded-sm top-3 left-3 z-30 opacity-0 peer-hover:opacity-100 transition-opacity'>
            Edit cover image
          </button>
        </section>
      </header>
    </div>
  );
};

export default UserProfileMain;
