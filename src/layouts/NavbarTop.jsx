import NavSearchBar from "@/components/navbar-top/NavSearchBar";
import NavIcons from "@/components/navbar-top/NavIcons";
import NavLogo from "@/components/navbar-top/NavLogo";

const NavbarTop = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-b-light-primary-border bg-light-primary-bg pl-10 pr-10 text-light-primary-text transition-all duration-300 dark:border-b-dark-primary-border dark:bg-dark-primary-bg dark:text-dark-secondary-text">
      <div className="flex items-center justify-between py-3">
        <NavLogo />
        <NavSearchBar />
        <NavIcons />
      </div>
    </nav>
  );
};

export default NavbarTop;
