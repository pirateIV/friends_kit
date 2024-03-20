import { Button } from '@material-tailwind/react';

import { useNavigate } from 'react-router-dom';
import useLoadingState from '../../hooks/useLoading';

const CustomButton = (props) => {
  const navigate = useNavigate();
  const { loading, handleLoading } = useLoadingState();
  const { type, content, variant, className, handleClick, navigateTo } = props;

  const handleOnClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    navigate(navigateTo);
    handleClick();
  };

  return (
    <Button
      style={{}}
      type={type}
      variant={variant}
      className={`${className}
       ${'disabled:cursor-not-allowed'}`}
      loading={loading}
      disabled={loading}
      onClick={() => handleLoading(handleOnClick)}>
      {!loading && content}
    </Button>
  );
};

export default CustomButton;
