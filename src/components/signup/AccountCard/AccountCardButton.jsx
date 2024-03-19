import { useNavigate } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';

const AccountCardButton = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/signup/info');

  const btnClass =
    'flex items-center justify-center w-full min-h-[42px] !text-white text-[.8rem] text-lowercase bg-blue-600 font-medium border border-slate-300 text-[#999] rounded-lg transition-colors hover:bg-blue-700 focus:border-blue-700 focus:bg-[#5684c1] focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400';

  return <CustomButton content='Continue' className={btnClass} handleClick={navigateTo} />;
};

export default AccountCardButton;
