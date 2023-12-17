"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faClock } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import { notificationData } from "@/local/notificationData";

const NotificationDropdown = () => {
  return (
    <Dropdown
      width="min-w-[360px]"
      right="-right-[1.325rem]"
      button={
        <FontAwesomeIcon
          icon={faBell}
          size="lg"
          className="cursor-pointer"
        />
      }>
      <div className="flex items-center justify-between border-b border-light-primary-border p-2 leading-4 dark:border-dark-primary-border">
        <div className="font-semibild text-black dark:text-dark-primary-text">
          Notifications
        </div>
        <button className="text-[0.8rem] font-extralight text-focus dark:text-dark-blue-secondary">
          Mark all as read
        </button>
      </div>
      <div className="h-[27rem] overflow-auto">
        {notificationData.map((item, index) => (
          <div
            key={index}
            className={` p-4 hover:bg-light-tertiary-bg dark:bg-dark-primary-bg dark:hover:bg-dark-tertiary-bg ${
              notificationData.length - 1 === index
                ? ""
                : "border-b border-light-primary-border dark:border-dark-primary-border"
            } ${
              item.isRead ? "bg-light-primary-bg" : "bg-light-secondary-bg"
            }`}>
            <div className="flex">
              <div className="flex w-full gap-4">
                <Image
                  src={item.avatar}
                  width={100}
                  height={100}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
                <div className="w-full pr-4 text-[0.8rem] text-light-primary-text dark:text-dark-secondary-text">
                  <div className="mb-1 font-semibold leading-none text-black dark:text-dark-primary-text">
                    {item.name}
                  </div>
                  <div className="mb-4">
                    {item.description}
                    <span className="ml-2 text-[0.64rem] text-light-secondary-text dark:text-dark-tertiary-text">
                      10m
                    </span>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-1"
                    />
                    <span className="font-bold">{item.time} </span>
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="self-center">
                <button className="rounded-lg border border-transparent px-4 py-2 leading-[0] hover:border-light-primary-border dark:hover:border-dark-primary-border">
                  <FontAwesomeIcon
                    icon={faEllipsis}
                    size="xs"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-light-primary-border text-[0.64rem] font-bold dark:border-dark-primary-border">
        <Link
          href="#"
          className="my-2 flex items-center justify-center leading-4 text-focus hover:underline dark:text-dark-blue-secondary">
          Notification history
        </Link>
      </div>
    </Dropdown>
  );
};

export default NotificationDropdown;
