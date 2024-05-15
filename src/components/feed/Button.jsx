import icons_2 from "@/assets/sprites/icon-sprites-2.png";

const Button = ({ label, position, handleClick }) => {
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#999",
  };

  return (
    <div>
      <button style={buttonStyles} onClick={() => handleClick()}>
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
