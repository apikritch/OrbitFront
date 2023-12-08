"use client";
import { useDispatch } from "react-redux";
import { toggleNavbar } from "@/store/features/navbarSlice";

const NavToggler = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(toggleNavbar());
  };

  return (
    <button
      className="mr-8 flex items-center lg:hidden"
      onClick={clickHandler}>
      <i className="lni lni-menu !text-xl dark:text-dark-tertiary-text"></i>
    </button>
  );
};

export default NavToggler;
