import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import UploadCard from '@/components/common/UploadCard';
import { uploadDialogs } from '..';
import IllustrationArea from './ui/IllustrationArea';
import BannerUploadArea from './ui/BannerUploadArea';

const BannerUploadModal = ({ dialogTrigger, dialogClose, triggerPcUpload }) => {
  return (
    <div id='upload-dialog'>
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
              {uploadDialogs.map((props) => (
                <UploadCard
                  {...props}
                  key={props.title}
                  triggerPcUpload={triggerPcUpload}
                />
              ))}
            </div>
          </div>
        </DialogContent>
        <DialogClose ref={dialogClose} asChild>
          <Button className='hidden'>Close</Button>
        </DialogClose>
      </Dialog>
    </div>
  );
};

export const UploadFromPcModal = ({ pcUploadTrigger }) => {
  const showArea = useSelector((state) => state.uploadArea);

  return (
    <Dialog>
      <DialogTrigger ref={pcUploadTrigger} className='hidden' asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[850px]'>
        <DialogHeader>
          <DialogTitle className='font-montserrat font-medium'>Upload cover</DialogTitle>
        </DialogHeader>
        {!showArea ? <IllustrationArea /> : <BannerUploadArea />}
        <Button
          className='bg-blue-500 hover:bg-blue-600 text-white disabled:!cursor-not-allowed'
          disabled={true}>
          Use Picture
        </Button>
      </DialogContent>
      <DialogClose asChild>
        <Button className='hidden sr-only'>Close</Button>
      </DialogClose>
    </Dialog>
  );
};

BannerUploadModal.propTypes = {
  dialogTrigger: PropTypes.object,
  dialogClose: PropTypes.object,
  triggerPcUpload: PropTypes.func,
};

export default BannerUploadModal;
