const LoginIllustration = ({ theme, loginIlustrLight, loginIlustrDark }) => {
  return (
    <img
      src={theme === 'light' ? loginIlustrLight : loginIlustrDark}
      className='max-w-[620px] hidden xl:flex'
      alt='login-illustration'
    />
  );
};

export default LoginIllustration;
