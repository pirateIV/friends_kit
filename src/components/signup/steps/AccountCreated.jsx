import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { stepProps } from '.';
import SignupCard from '@/components/common/SignupCard';
import SignupWrapper from '@/components/common/SignupWrapper';
import { setProgress } from '@/redux/reducers/progressReducer';
import AcctCreatedContent from '../stepsComponents/AcctCreatedContent';

const AccountCreated = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setProgress(100));
  }, []);
  const next = () => navigate('/');

  return (
    <SignupWrapper {...stepProps.accountCreated}>
      <SignupCard>
        <AcctCreatedContent next={next} />
      </SignupCard>
    </SignupWrapper>
  );
};

export default AccountCreated;
