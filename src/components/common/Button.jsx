const Button = ({ content, className, handleClick }) => {
  return (
    <button type='button' className={className} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
