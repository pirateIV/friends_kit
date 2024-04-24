import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

import { assets, uploadClass } from '.';
import PlusIcon from '@/shared/components/icons/PlusIcon';
// import returnFileSize from '@/helpers/returnFileSize';
import { getUserInfo, setProfileUpload } from '@/auth/reducers/user/userSlice';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

const defaultSrc = assets.avatar;

const ProfileUploadContent = () => {
  const inputFileRef = useRef();
  const cropBtnRef = useRef();
  const dispatch = useDispatch();
  // const user = useSelector(getUserInfo);

  // const [fileSize, setFileSize] = useState('');
  const { profilePic } = useSelector(getUserInfo);
  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState('');
  const [cropper, setCropper] = useState(null);

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
    cropBtnRef.current.click();
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  useEffect(() => {
    cropData && dispatch(setProfileUpload(cropData));
  }, [dispatch, cropData]);

  return (
    <>
      <div className={uploadClass.container}>
        <div className='photo-upload flex-center w-[100px] h-[100px] rounded-full overflow-hidden'>
          <img src={!profilePic ? defaultSrc : profilePic} alt='Profile' />
          <a className={uploadClass.photoUpload} onClick={(e) => handleImageUpload(e)}>
            <PlusIcon />
          </a>
          <input
            type='file'
            id='file-input'
            className='hidden'
            ref={inputFileRef}
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
          <Button ref={cropBtnRef} variant='outline' className='hidden'>
            Share
          </Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-xl'>
          <DialogHeader>
            <h3> Crop your Picture</h3>
          </DialogHeader>
          <section className='mt-4'>
            <Cropper
              zoomTo={0.5}
              viewMode={1}
              src={image}
              autoCropArea={1}
              responsive={true}
              background={false}
              className='cropper'
              minCropBoxWidth={10}
              minCropBoxHeight={10}
              initialAspectRatio={1}
              checkOrientation={false}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
              guides={true}
            />
          </section>
          <DialogFooter className='sm:items-end'>
            <DialogClose>
              <Button
                type='button'
                variant='secondary'
                onClick={() => getCropData()}
                className='w-16 bg-green-600 text-white focus:outline-none'>
                Crop
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileUploadContent;
