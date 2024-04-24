import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { profileProps } from '..';
import ProfileMenu from '@/components/ProfileMenu';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileSubHeader from '@/components/ProfileSubHeader';
import changeCover from '@/assets/illustrations/change-cover.svg';
import uploadCover from '@/assets/illustrations/upload-cover.svg';
import UploadCard from '@/components/common/UploadCard';
import { DialogClose } from '@radix-ui/react-dialog';

const UserProfileMain = ({ children }) => {
  const dialogTrigger = useRef();

  const triggerModal = () => {
    dialogTrigger.current.click();
  };

  return (
    <div {...profileProps}>
      <ProfileHeader triggerModal={triggerModal} />
      <ProfileMenu />
      <ProfileSubHeader />

      <div id='upload-dida'>
        <Dialog>
          <DialogTrigger ref={dialogTrigger} className='hidden' asChild>
            <Button variant='outline'>Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className='sm:max-w-[650px]'>
            <DialogHeader>
              <DialogTitle className='font-montserrat font-medium'>
                Update cover
              </DialogTitle>
              <DialogDescription className='text-gray-600'>
                Make changes to your profile banner here.
              </DialogDescription>
            </DialogHeader>

            <div className='banner-upload'>
              <div className='flex-center gap-5'>
                {[
                  {
                    title: 'Upload',
                    imageSrc: uploadCover,
                    description: 'From your phone/pc',
                  },
                  {
                    title: 'Choose',
                    imageSrc: changeCover,
                    description: 'From your photos',
                  },
                ].map((props) => (
                  <UploadCard key={props.title} {...props} />
                ))}
              </div>
            </div>
          </DialogContent>
          <DialogClose asChild>
            <Button className='hidden sr-only'>Close</Button>
          </DialogClose>
        </Dialog>
      </div>
      {children}
    </div>
  );
};

export default UserProfileMain;
