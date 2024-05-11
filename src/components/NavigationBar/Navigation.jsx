import NavbarEnd from "./NavbarEnd";
import NavbarLogo from "./NavbarLogo";
import NavbarStart from "./NavbarStart";

const Navigation = () => {
  return (
    <nav className="relative h-14 w-full z-50">
      <section className="nav-section">
        <NavbarLogo />
        <div className="w-full ms-3 px-4">
          <div className="flex-between w-full" id="navbar-menu">
            <NavbarStart />
            <NavbarEnd />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
