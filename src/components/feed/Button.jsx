const Button = ({ iconUrl, label }) => {
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#999",
  };

  return (
    <div>
      <button style={buttonStyles}>
        <i
          data-visualcompletion="css-img"
          className="x1b0d499 x1d69dk1"
          style={{
            backgroundImage: `url("${iconUrl}")`,
            backgroundSize: "auto",
            backgroundRepeat: "no-repeat",
            width: "20px",
            height: "20px",
            opacity: "0.6",
          }}
        ></i>
        {label}
      </button>
    </div>
  );
};

export default Button;
