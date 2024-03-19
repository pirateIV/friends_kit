import { Button } from '@material-tailwind/react';

import { useNavigate } from 'react-router-dom';
import useLoadingState from '../../hooks/useLoading';

const CustomButton = ({ content, className, handleClick, navigateTo }) => {
  const navigate = useNavigate();
  const { loading, handleLoading } = useLoadingState();

  const handleOnClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    navigate(navigateTo);
    handleClick();
  };
  return (
    <Button
      type='button'
      className={`${className}
       ${'disabled:cursor-not-allowed'}`}
      disabled={loading}
      onClick={() => handleLoading(handleOnClick)}>
      {loading ? 'loading...' : content}
    </Button>
  );
};

export default CustomButton;
