import { Button, Spinner } from '@material-tailwind/react';

import { useNavigate } from 'react-router-dom';
import useLoadingState from '../../hooks/useLoading';

const CustomButton = (props) => {
  const { content, variant, className, handleClick, navigateTo } = props;

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
      variant={variant}
      className={`${className}
       ${'disabled:cursor-not-allowed'}`}
      loading={loading}
      disabled={loading}
      onClick={() => handleLoading(handleOnClick)}>
      {content}
    </Button>
  );
};

export default CustomButton;
