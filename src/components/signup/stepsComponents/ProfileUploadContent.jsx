import { assets, uploadClass } from '.';
import PlusIcon from '../../../shared/components/icons/PlusIcon';

const ProfileUploadContent = () => {
  return (
    <>
      <div className={uploadClass.container}>
        <div className='photo-upload'>
          <a className={uploadClass.photoUpload}>
            <PlusIcon />
          </a>
          <img
            src={assets.avatar}
            alt='avatar'
            width='100'
            height='100'
            className='rounded-full'
            loading='lazy'
          />
        </div>
      </div>
      <div className='limitation mt-5 text-center'>
        <small className='text-[#999] text-[.875em]'>
          Only images with a size lower than 3MB are allowed.
        </small>
      </div>
    </>
  );
};

export default ProfileUploadContent;
