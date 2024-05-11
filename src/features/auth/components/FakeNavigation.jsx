import { useNavigate } from "react-router-dom";
import logo from "@/assets/images/logo/logo.svg";
import useCustomLocation from "@/hooks/useCustomLocation";
import ThemeSwitcher from "@/shared/components/ThemeSwitcher";

const FakeNavigation = () => {
  const navigate = useNavigate();
  const isSignupPage = useCustomLocation("signup");

  let content;
  if (isSignupPage) {
    content = (
      <button
        className="absolute text-sm right-20 text-white px-5 py-1.5 border-t border-teal-300 rounded-full bg-teal-600"
        onClick={() => navigate("/login")}
      >
        login
      </button>
    );
  } else {
    content = (
      <button
        className="absolute text-sm right-20 text-white px-5 py-1.5 border-t border-teal-300 rounded-full bg-teal-600"
        onClick={() => navigate("/signup")}
      >
        sign up
      </button>
    );
  }

  return (
    <nav className="fake-nav relative flex-center w-full h-[55px] bg-white dark:bg-[#1c2330]">
      <img src={logo} height="48" width="48" alt="Logo" />
      {content}
      <ThemeSwitcher />
    </nav>
  );
};

export default FakeNavigation;
