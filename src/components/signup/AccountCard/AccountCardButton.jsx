import { useNavigate } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';

const AccountCardButton = () => {
  const navigate = useNavigate();
  const navigateTo = () => navigate('/signup/info');

  const btnClass =
    'flex items-center justify-center w-full min-h-[42px] text-[.8rem] font-medium border border-slate-300 text-[#999] rounded-lg transition-colors hover:text-white hover:border-[#3d70b2] hover:bg-[#3d70b2] focus:text-white focus:bg-[#5684c1] focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400';

  return <CustomButton content='Continue' className={btnClass} handleClick={navigateTo} />;
};

export default AccountCardButton;
