import { useRef, useState } from 'react';
import { assets, uploadClass } from '.';
import PlusIcon from '../../../shared/components/icons/PlusIcon';
import returnFileSize from '../../../helpers/returnFileSize';

const defaultSrc = assets.avatar;

const ProfileUploadContent = () => {
  const [image, setImage] = useState(defaultSrc);
  const [fileSize, setFileSize] = useState('');
  const inputFileRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setFileSize(returnFileSize(file.size));
    console.log(fileSize);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    inputFileRef.current.click();
  };

  return (
    <>
      <div className={uploadClass.container}>
        <div
          className='photo-upload w-[100px] h-[100px] rounded-full bg-cover'
          style={{ backgroundImage: `url(${image})` }}>
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
    </>
  );
};

export default ProfileUploadContent;
