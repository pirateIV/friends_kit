import { useNavigate } from 'react-router-dom';
import useLoadingState from '../../hooks/useLoading';

const Button = ({ content, className, handleClick, navigateTo }) => {
  const navigate = useNavigate();
  const { loading, handleLoading } = useLoadingState();

  const handleOnClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    navigate(navigateTo);
    handleClick();
  };
  return (
    <button
      type='button'
      className={className}
      onClick={() => handleLoading(handleOnClick)}>
      {loading ? 'loading...' : content}
    </button>
  );
};

export default Button;
