import { shrinkNavbar } from "@/store/features/navbarSlice";
import { useSelector, useDispatch } from "react-redux";

const NavShrinker = () => {
  const dispatch = useDispatch();

  const isNavbarShrunken = useSelector(
    (state) => state.navbar.isNavbarShrunken
  );

  const shrinkHandler = () => {
    dispatch(shrinkNavbar());
  };

  return (
    <div
      className={`fixed bottom-0 hidden h-[4.25rem] w-[4.25rem] items-center border-r border-t border-light-primary-border bg-light-primary-bg text-light-secondary-text transition duration-150 hover:text-light-primary-text dark:border-dark-primary-border dark:bg-dark-primary-bg dark:text-dark-secondary-text dark:hover:text-dark-primary-text lg:flex ${
        isNavbarShrunken ? "lg:w-[4.25rem]" : "lg:w-[20rem]"
      }`}>
      <button
        className={`flex w-full items-center px-[1.65rem] py-3 ${
          isNavbarShrunken ? "" : ""
        }`}
        onClick={shrinkHandler}>
        <i
          className={`lni lni-shift-left !text-sm !font-semibold transition duration-150 ${
            isNavbarShrunken ? "scale-x-[-1]" : "scale-x-1"
          }`}></i>
        <div
          className={`ml-2 text-[0.8rem] transition duration-150 ${
            isNavbarShrunken ? "lg:hidden" : ""
          }`}>
          Collapsed View
        </div>
      </button>
    </div>
  );
};

export default NavShrinker;
