import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLoadingState from "@/hooks/useLoading";
import { Button } from "@material-tailwind/react";

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
      color="gray"
      type={type}
      variant={variant}
      loading={loading}
      disabled={loading}
      className={`${className}
       ${"disabled:cursor-not-allowed"}`}
      onClick={() => handleLoading(handleOnClick())}
    >
      {content}
    </Button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  navigateTo: PropTypes.func,
};

export default CustomButton;
