import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link to="/" className="min-w-[58px] w-[58px] flex-center me-3">
      <img src="/logo.svg" className="p-2.5" alt="logo" />
    </Link>
  );
};

export default NavbarLogo;
