import { useDispatch } from 'react-redux';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useEffect } from 'react';
import SignupWrapper from '../../common/SignupWrapper';
import ButtonGroup from '../../common/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import SignupCard from '../../common/SignupCard';
import ProfileUploadContent from '../ProfileUpload/ProfileUploadContent';

const ProfileUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setProgress(50));

  const prev = () => navigate('/signup/info');

  const next = () => navigate('/signup/auth');

  return (
    <SignupWrapper id='upload-profile' title='Upload a Profile picture.'>
      <SignupCard prev={prev} next={next}>
        <ProfileUploadContent />
      </SignupCard>
    </SignupWrapper>
  );
};
{
  /*  */
}
export default ProfileUpload;
