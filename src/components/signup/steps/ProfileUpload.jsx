import { useDispatch } from 'react-redux';
import { setProgress } from '../../../redux/reducers/progressReducer';
import { useEffect } from 'react';
import SignupWrapper from '../../common/SignupWrapper';

const ProfileUpload = () => {
  const dispatch = useDispatch();
  dispatch(setProgress(50));

  return (
    <SignupWrapper id='upload-profile' title='Upload Profile Picture'></SignupWrapper>
  );
};

export default ProfileUpload;
