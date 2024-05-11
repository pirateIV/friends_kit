import logo from "@/assets/images/logo/logo.svg";

const NavbarLogo = () => {
  return (
    <a href="/" className="min-w-[58px] w-[58px] flex-center me-3">
      <img src={logo} className="p-2.5" alt="logo" />
    </a>
  );
};

export default NavbarLogo;
