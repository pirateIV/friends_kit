import avatar from '../../../assets/images/signup/avatar-w.webp';
import PlusIcon from '../../../shared/components/icons/PlusIcon';

const ProfileUploadContent = () => {
  return (
    <>
      <div className='preview flex items-center justify-center relative w-[120px] h-[120px] mx-auto border border-[#cecece] rounded-full'>
        <div className='photo-upload'>
          <a className='upload-button absolute top-0 right-0 flex items-center justify-center h-[36px] w-[36px] text-white border-[3px] border-white rounded-full bg-[#cecece] cursor-pointer hover:bg-blue-500'>
            <PlusIcon />
          </a>
          <img
            src={avatar}
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
