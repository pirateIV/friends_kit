import { useDispatch } from 'react-redux';
import SignupCard from '../../common/SignupCard';
import SignupWrapper from '../../common/SignupWrapper';
import { useNavigate } from 'react-router-dom';
import { setProgress } from '../../../redux/reducers/progressReducer';
import AcctCreatedContent from '../stepsComponents/AcctCreatedContent';

const AccountCreated = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(setProgress(100));

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
