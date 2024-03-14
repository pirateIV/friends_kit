import { useNavigate } from 'react-router-dom';
import useLoadingState from '../../../hooks/useLoading';

const AccountCardButton = () => {
  const navigate = useNavigate()
  const { loading, handleLoading } = useLoadingState();

  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    navigate('/signup/info');
  };
  return (
    <button
      onClick={() => handleLoading(handleClick)}
      className='flex items-center justify-center w-full min-h-[42px] text-[.8rem] font-medium border border-slate-300 text-[#999] rounded-lg transition-colors hover:text-white hover:border-[#3d70b2] hover:bg-[#3d70b2] focus:text-white focus:bg-[#5684c1] focus:outline-none disabled:cursor-not-allowed disabled:bg-blue-400'
      disabled={loading}>
      {loading ? 'Loading...' : 'Continue'}
    </button>
  );
};

export default AccountCardButton;
