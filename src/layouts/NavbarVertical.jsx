"use client";
import { useSelector } from "react-redux";
import NavShrinker from "@/components/navbar-vertical/NavShrinker";
import NavContent from "@/components/navbar-vertical/NavContent";

const NavbarVertical = () => {
  const isNavbarShown = useSelector((state) => state.navbar.isNavbarShown);
  const isNavbarShrunken = useSelector(
    (state) => state.navbar.isNavbarShrunken
  );
  const popMenuIndex = useSelector((state) => state.navbar.popMenuIndex);

  return (
    <nav
      className={`left-0 w-full border-r border-r-light-primary-border bg-light-primary-bg transition-all duration-300 dark:border-r-dark-primary-border dark:bg-dark-primary-bg lg:h-full ${
        isNavbarShown ? "z-20 h-full" : "z-10 h-0"
      } ${
        isNavbarShrunken
          ? "fixed lg:absolute lg:w-[4.25rem]"
          : "absolute lg:fixed lg:w-[20rem]"
      } ${
        isNavbarShrunken && popMenuIndex !== null
          ? "z-20 overflow-visible"
          : "overflow-hidden"
      }`}>
      <NavContent />
      <NavShrinker />
    </nav>
  );
};

export default NavbarVertical;
