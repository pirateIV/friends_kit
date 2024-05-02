import { useRef } from 'react';
import PropTypes from 'prop-types';
import { profileProps } from '..';
import ProfileMenu from '@/components/ProfileMenu';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileSubHeader from '@/components/ProfileSubHeader';
import BannerUploadModal, { UploadFromPcModal } from '@/components/modals/banner_modals';
import { Button } from 'flowbite-react';

const UserProfileMain = ({ children }) => {
  const dialogTrigger = useRef();
  const dialogClose = useRef();
  const pcUploadTrigger = useRef();

  const triggerModal = () => {
    dialogTrigger.current.click();
  };

  const triggerPcUpload = () => {
    pcUploadTrigger.current.click();
    dialogClose.current.click();
  };

  return (
    <div {...profileProps}>
      <ProfileHeader triggerModal={triggerModal} />
      <ProfileMenu />
      <ProfileSubHeader />
      <div className='user-details-container'>
        <div className='content-header mt-5 grid grid-cols-9 gap-5'>
          <aside className='left col-span-3 h-96'>
            <div className='top-card h-14 bg-white p-3 ps-5 border border-gray-300 rounded-lg'>
              <span>Basic Infos</span>
            </div>
          </aside>
          <aside className='right col-span-6 h-96'>
            <div className='top-card h-14 flex items-center justify-between bg-white p-3 px-5 border border-gray-300 rounded-lg'>
              <span>Posts</span>
              <div className='btns inline-flex gap-3'>
                <Button label='1' className='recent' color='gray'>
                  Recent
                </Button>
                <Button label='1' className='popular' color='gray'>
                  Popular
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* modals */}
      <BannerUploadModal
        dialogTrigger={dialogTrigger}
        dialogClose={dialogClose}
        triggerPcUpload={triggerPcUpload}
      />
      <UploadFromPcModal pcUploadTrigger={pcUploadTrigger} />
      {children}
    </div>
  );
};

UserProfileMain.propTypes = {
  children: PropTypes.node,
};

export default UserProfileMain;
