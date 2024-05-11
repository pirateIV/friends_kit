import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { setProgress } from "@/redux/reducers/progressReducer.js";
import useDocumentTitle from "@/hooks/useDocumentTitle.jsx";
import useCustomLocation from "@/hooks/useCustomLocation.jsx";
import SelectAccount from "@/components/signup/steps/SelectAccount.jsx";
import CustomSignupProgress from "@/components/signup/progress/CustomSignupProgress.jsx";

import "./Signup.css";
import AuthContainer from "@/features/auth/components/AuthContainer.jsx";
import FakeNavigation from "@/features/auth/components/FakeNavigation.jsx";

const Signup = () => {
  const dispatch = useDispatch();

  useDocumentTitle("Sign Up");
  const isSignupPath = useCustomLocation("signup");
  useEffect(() => {
    if (isSignupPath) {
      dispatch(setProgress(0));
    }
  }, [dispatch, isSignupPath]);
  const signupContent = isSignupPath ? <SelectAccount /> : <Outlet />;

  return (
    <>
      <AuthContainer>
        <FakeNavigation />
        <CustomSignupProgress />
        {signupContent}
      </AuthContainer>
    </>
  );
};

export default Signup;
