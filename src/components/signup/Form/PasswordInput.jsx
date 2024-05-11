import InputField from "../../common/InputField";

const cs = "bg-white shadow-tiny mt-4 rounded-lg p-6 dark:bg-[#202836]";

const PasswordInput = () => (
  <section className={cs}>
    {[
      {
        name: "password",
        type: "password",
        label: "Password",
        htmlFor: "password",
        placeholder: "Enter password",
        autoComplete: "current-password",
      },
      {
        type: "password",
        htmlFor: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        autoComplete: "current-password",
        placeholder: "re-enter your password",
      },
    ].map((input, index) => (
      <InputField key={index} {...input} />
    ))}
  </section>
);

export default PasswordInput;
