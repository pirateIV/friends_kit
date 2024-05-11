import { useSelector } from "react-redux";
import { getTheme } from "@/redux/reducers/themeReducer";
import loginIlustrDark from "@/assets/images/login/illustration-dark.svg";
import loginIlustrLight from "@/assets/images/login/illustration-light.svg";

const LoginIllustration = () => {
  const theme = useSelector(getTheme());

  return (
    <img
      src={theme === "light" ? loginIlustrLight : loginIlustrDark}
      className="max-w-[620px] hidden xl:flex"
      alt="login-illustration"
    />
  );
};

export default LoginIllustration;
