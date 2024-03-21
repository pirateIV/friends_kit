import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assets, uploadClass } from '.';
import PlusIcon from '../../../shared/components/icons/PlusIcon';
import returnFileSize from '../../../helpers/returnFileSize';
import { getUserInfo, setProfileUpload } from '../../../auth/reducers/user/userSlice';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const defaultSrc = assets.avatar;

const ProfileUploadContent = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserInfo);
  const [image, setImage] = useState(defaultSrc);
  const [fileSize, setFileSize] = useState('');
  const inputFileRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFileSize(returnFileSize(file.size));
    dispatch(setProfileUpload(imageUrl));
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  return (
    <>
      {/* <small className='absolute text-center items-center justify-center top-10 end-5 bg-yellow-400 h-10 w-10 rounded-full'>{fileSize}</small> */}
      <div className={uploadClass.container}>
        <div
          className='photo-upload w-[100px] h-[100px] rounded-full bg-cover object-cover'
          style={{
            backgroundImage: `url(${!user.profilePic ? defaultSrc : user.profilePic})`,
          }}>
          <a className={uploadClass.photoUpload} onClick={(e) => handleImageUpload(e)}>
            <PlusIcon />
          </a>
          <input
            type='file'
            ref={inputFileRef}
            id='file-input'
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className='limitation mt-5 text-center'>
        <small className='text-[#999] text-[.875em]'>
          Only images with a size lower than 3MB are allowed.
        </small>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Share</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-md'>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className='grid flex-1 gap-2'>
            <Button type='submit' size='sm' className='px-3'>
              <span>Copy</span>
            </Button>
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileUploadContent;
