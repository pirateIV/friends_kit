import * as Yup from "yup";
import { useEffect } from "react";
import { submitBtnClass } from ".";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import { useLoginMutation } from "@/app/api/authSlice";
import InputField from "@/components/common/InputField";
import ForgotPassword from "@/components/login/ForgotPassword";
import {
  getCurrentUser,
  setCredentials,
} from "@/features/auth/reducers/login/loginSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("required!"),
  password: Yup.string()
    .required("required!")
    .min(8, "password must at least be 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one digit",
    ),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { isAuthenticated, isError } = useSelector((state) => state.auth);

  console.log(isAuthenticated);

  const submitForm = async (values) => {
    const { token } = await login(values).unwrap();
    dispatch(setCredentials(token));
    dispatch(getCurrentUser());
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={(values) => submitForm(values)}
    >
      <Form>
        <section className="inputs w-full mt-4 space-y-2 xl:w-3/4">
          <div>
            <InputField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email address"
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
          </div>

          <ForgotPassword />

          <Button
            type="submit"
            color="blue"
            fullWidth
            loading={isLoading}
            className={`${submitBtnClass} first-letter:!uppercase !lowercase`}
            disabled={isLoading || isError}
          >
            {isLoading ? "logging in..." : "Login"}
          </Button>
        </section>
      </Form>
    </Formik>
  );
};

export default LoginForm;
