import { useDispatch } from 'react-redux';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useEffect } from 'react';
import SignupWrapper from '../../common/SignupWrapper';
import avatar from '../../../assets/images/signup/avatar-w.webp';
import ButtonGroup from '../../common/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import SignupCard from '../../common/SignupCard';

const ProfileUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setProgress(50));

  const prev = () => navigate('/signup/info');

  const next = () => navigate('/signup/auth');

  return (
    <SignupWrapper id='upload-profile' title='Upload a Profile picture.'>
      <SignupCard prev={prev} next={next}>
        <div className='preview flex items-center justify-center relative w-[120px] h-[120px] mx-auto border border-[#cecece] rounded-full'>
          <div className='photo-upload'>
            <a className='upload-button absolute top-0 right-0 flex items-center justify-center h-[36px] w-[36px] text-white border-[3px] border-white rounded-full bg-[#cecece] cursor-pointer hover:bg-blue-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-[16px] w-[16px]'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-plus'>
                <line x1='12' y1='5' x2='12' y2='19'></line>
                <line x1='5' y1='12' x2='19' y2='12'></line>
              </svg>
            </a>
            <img
              src={avatar}
              alt='avatar'
              width='100'
              height='100'
              className='rounded-full'
            />
          </div>
        </div>
        <div className='limitation mt-5 text-center'>
          <small className='text-[#999] text-[.875em]'>
            Only images with a size lower than 3MB are allowed.
          </small>
        </div>
      </SignupCard>
    </SignupWrapper>
  );
};
{
  /*  */
}
export default ProfileUpload;
