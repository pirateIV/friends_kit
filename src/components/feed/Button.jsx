import icons_2 from "@/assets/sprites/icon-sprites-2.png";

const Button = ({ label, position, handleClick }) => {
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div>
      <button
        className="text-[#777] hover:text-gray-800 dark:hover:text-blue-400"
        style={buttonStyles}
        onClick={() => handleClick()}
      >
        <i
          style={{
            backgroundImage: `url("${icons_2}")`,
            backgroundPosition: position,
            backgroundSize: "auto",
            width: "20px",
            height: "20px",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            filter: "contrast(0%)",
          }}
        ></i>
        {label}
      </button>
    </div>
  );
};
export default Button;
