import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { stepProps } from '.';
import SignupCard from '@/components/common/SignupCard';
import SignupWrapper from '@/components/common/SignupWrapper';
import { setProgress } from '@/redux/reducers/progressReducer';
import ProfileUploadContent from '../stepsComponents/ProfileUploadContent';

const ProfileUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setProgress(50));
  }, []);
  const prev = () => navigate('/signup/info');
  const next = () => navigate('/signup/auth');

  const cardProps = { prev, next };
  return (
    <SignupWrapper {...stepProps.profileUpload}>
      <SignupCard {...cardProps}>
        <ProfileUploadContent />
      </SignupCard>
    </SignupWrapper>
  );
};

export default ProfileUpload;
