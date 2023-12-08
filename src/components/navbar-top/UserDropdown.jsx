"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userDropdownData } from "@/local/userDropdownData";
import {
  faUserPlus,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";

const UserDropdown = () => {
  return (
    <Dropdown
      width="min-w-[18.25rem]"
      right="-right-[0.55rem]"
      button={
        <Image
          src="/img/users/57.webp"
          width={100}
          height={100}
          alt=""
          className="h-10 w-10 rounded-full"
        />
      }>
      <div className="pb-4 pt-6 text-center">
        <Image
          src="/img/users/57.webp"
          width={100}
          height={100}
          alt=""
          className="inline-block h-12 w-12 rounded-full"
        />
        <p className="mb-1 mt-2 text-[0.8rem] font-semibold text-black dark:text-dark-primary-text">
          Jerry Seinfield
        </p>
      </div>
      <div className="mx-4 mb-4">
        <input
          type="text"
          placeholder="Update your status"
          className="w-full rounded-md border border-light-primary-border px-4 py-[0.375rem] text-[0.8rem] text-light-primary-text transition duration-300 ease-in-out focus:border-focus focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0),inset_0_0_0_30px_#fff,0_0_0_.25rem_rgba(56,116,255,.25)] focus:outline-0 dark:border-dark-primary-border dark:bg-dark-primary-bg dark:text-dark-secondary-text dark:focus:border-focus dark:focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0),inset_0_0_0_30px_#141824,0_0_0_.25rem_rgba(56,116,255,.25)]"
        />
      </div>
      <div className="h-40 overflow-auto text-[0.8rem]">
        <ul className=" flex flex-col">
          {userDropdownData.map((item, index) => (
            <li
              className="text-light-primary-text duration-150 ease-in-out hover:bg-light-secondary-bg hover:text-black dark:text-dark-secondary-text dark:hover:bg-dark-tertiary-bg"
              key={index}>
              <a
                href="#"
                className="flex items-center px-4 py-2 leading-none">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="mr-2 text-[1rem]"
                />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-t-light-primary-border text-[0.8rem] dark:border-t-dark-primary-border">
        <a
          href="#"
          className="my-4 flex items-center px-4 py-2 leading-none text-light-primary-text hover:bg-light-secondary-bg dark:text-dark-secondary-text dark:hover:bg-dark-tertiary-bg">
          <FontAwesomeIcon
            icon={faUserPlus}
            className="mr-2 text-[0.95rem]"
          />
          <span>Add another account</span>
        </a>
        <hr className="my-4 border-light-primary-border dark:border-dark-secondary-border" />
        <div className="px-4 text-light-primary-text dark:text-dark-secondary-text">
          <button className="flex w-full items-center justify-center rounded-md border border-light-secondary-border bg-light-secondary-bg px-6 py-2 font-bold hover:bg-light-quaternary-bg dark:border-dark-secondary-border dark:bg-dark-secondary-bg dark:hover:bg-dark-tertiary-bg">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="mr-2 text-[0.85rem]"
            />
            <span>Sign out</span>
          </button>
        </div>
        <div className="my-2 flex justify-center gap-1 text-[0.65rem] font-semibold text-light-secondary-text dark:text-dark-tertiary-text">
          <a
            href="#"
            className="hover:underline">
            Privacy policy
          </a>
          <div>•</div>
          <a
            href="#"
            className="hover:underline">
            Terms
          </a>
          <div>•</div>
          <a
            href="#"
            className="hover:underline">
            Cookies
          </a>
        </div>
      </div>
    </Dropdown>
  );
};

export default UserDropdown;
