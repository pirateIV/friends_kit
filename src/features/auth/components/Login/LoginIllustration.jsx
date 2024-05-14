import { useDispatch, useSelector } from "react-redux";
import { getTheme, switchCaseOnTheme } from "@/redux/reducers/themeReducer";
import loginIlustrDark from "@/assets/images/login/illustration-dark.svg";
import loginIlustrLight from "@/assets/images/login/illustration-light.svg";

const LoginIllustration = () => {
  const theme = useSelector(getTheme());
  const switchImg = (case1, case2) => (theme === "light" ? case1 : case2);

  return (
    <img
      src={switchImg(loginIlustrLight, loginIlustrDark)}
      className="max-w-[620px] hidden xl:flex"
      alt="login-illustration"
    />
  );
};

export default LoginIllustration;
