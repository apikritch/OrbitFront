import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavSearchBar = () => {
  return (
    <div className="relative hidden w-[25rem] lg:block">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="xs"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-light-secondary-text dark:text-dark-tertiary-text"
      />
      <input
        type="text"
        className="w-full rounded-full border border-light-primary-border bg-transparent py-[0.375rem] pl-10 pr-8 text-[0.8rem] font-light text-light-primary-text focus:rounded-b-none focus:rounded-t-md focus:outline-0 dark:border-dark-primary-border dark:text-dark-secondary-text"
        placeholder="Search..."
      />
      <i className="lni lni-close absolute right-3 top-1/2 -translate-y-1/2  cursor-pointer !text-[0.8rem] !font-bold !text-light-secondary-text hover:!text-light-primary-text dark:!text-dark-secondary-text dark:hover:!text-dark-primary-text"></i>
    </div>
  );
};

export default NavSearchBar;
