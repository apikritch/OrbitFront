"use client";
import { useSelector } from "react-redux";
import NavbarVertical from "@/layouts/NavbarVertical";

const SuperAdminLayout = (props) => {
  const { children } = props;

  const isNavbarShrunken = useSelector(
    (state) => state.navbar.isNavbarShrunken
  );

  return (
    <div className="relative flex">
      <NavbarVertical />
      <main
        className={`z-10 min-h-[calc(100vh-66px)] w-full bg-light-secondary-bg p-10 transition-all duration-300 dark:bg-dark-secondary-bg ${
          isNavbarShrunken ? "lg:ml-[4.25rem]" : "lg:ml-[20rem]"
        }`}>
        {children}
      </main>
    </div>
  );
};

export default SuperAdminLayout;
