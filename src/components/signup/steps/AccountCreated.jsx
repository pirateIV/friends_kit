import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SignupCard from '../../common/SignupCard';
import SignupWrapper from '../../common/SignupWrapper';
import { setProgress } from '../../../redux/reducers/progressReducer';
import AcctCreatedContent from '../stepsComponents/AcctCreatedContent';
import { useEffect } from 'react';

const AccountCreated = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(setProgress(100));
  }, []);
  const next = () => navigate('/');
  return (
    <SignupWrapper id='account-created' title="You're all set. Ready?">
      <SignupCard>
        <AcctCreatedContent next={next} />
      </SignupCard>
    </SignupWrapper>
  );
};

export default AccountCreated;
