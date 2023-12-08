"use client";
import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import { mdiDotsGrid } from "@mdi/js";
import Dropdown from "./Dropdown";
import { featureDropdownData } from "@/local/featureDropdownData";

const FeatureDropdown = () => {
  return (
    <Dropdown
      width="min-w-[15.375rem]"
      right="-right-[1.1rem]"
      button={
        <Icon
          path={mdiDotsGrid}
          size={1}
          className="cursor-pointer"
        />
      }>
      <div className="scrollbox h-[20rem] overflow-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-y-4">
          {featureDropdownData.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex flex-col items-center justify-between rounded-lg pb-[0.3rem] pt-[0.65rem] text-light-primary-text transition  duration-150 hover:bg-light-quaternary-bg dark:text-dark-primary-text dark:hover:bg-dark-quaternary-bg">
              {item.type === "fa" ? (
                <Image
                  src={item.icon}
                  width={100}
                  height={100}
                  alt=""
                  className={item.title === "Figma" ? "w-[20px]" : "w-[30px]"}
                />
              ) : (
                <Icon
                  path={item.icon}
                  className="w-[30px]"
                />
              )}
              <div className="mt-2 text-[0.64rem]">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </Dropdown>
  );
};

export default FeatureDropdown;
