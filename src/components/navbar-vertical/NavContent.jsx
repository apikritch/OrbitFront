import { usePathname } from "next/navigation";
import { useEffect, Fragment, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import { expandMenu, popMenu } from "@/store/features/navbarSlice";
import { sidebarData } from "@/local/sidebarData";
import NavSubContent from "./NavSubContent";
import NavPopContent from "./NavPopContent";

const NavContent = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const menuIndex = useSelector((state) => state.navbar.menuIndex);
  const isNavbarShrunken = useSelector(
    (state) => state.navbar.isNavbarShrunken
  );
  const popMenuIndex = useSelector((state) => state.navbar.popMenuIndex);

  const clickHandler = (index) => {
    if (menuIndex === index) {
      dispatch(expandMenu(null));
    } else {
      dispatch(expandMenu(index));
    }
  };

  const mouseEnterHandler = (index) => {
    dispatch(popMenu(index));
  };

  const initiate = useCallback(() => {
    const initialIndex = sidebarData.findIndex((item) => {
      return item.children.some((itm) => itm.route === pathname);
    });

    dispatch(expandMenu(initialIndex));
  }, [dispatch, pathname]);

  useEffect(() => {
    initiate();
  }, [initiate]);

  return (
    <div
      className={`h-[calc(100vh-66px)] w-full overflow-auto py-4 ${
        isNavbarShrunken
          ? "lg:w-[4.25rem] lg:overflow-visible"
          : "fixed lg:h-[calc(100vh-66px-4.25rem)] lg:w-[20rem]"
      }`}>
      {sidebarData.map((item, index) => {
        const title = item.title.toLowerCase();

        return (
          <Fragment key={index}>
            <div
              className="px-3"
              onMouseEnter={() => mouseEnterHandler(index)}
              onMouseLeave={() => mouseEnterHandler(null)}>
              <button
                onClick={() => clickHandler(index)}
                className={`flex w-full items-center rounded-lg  py-[0.375rem] text-[0.9rem] text-light-secondary-text duration-150 ease-in-out hover:bg-light-tertiary-bg hover:text-light-primary-text dark:text-dark-secondary-text dark:hover:bg-dark-quaternary-bg dark:hover:text-dark-primary-text ${
                  isNavbarShrunken ? "lg:py-3" : ""
                } ${
                  isNavbarShrunken && popMenuIndex === index
                    ? "lg:bg-light-tertiary-bg"
                    : ""
                }`}>
                <div
                  className={`w-1 ${
                    isNavbarShrunken ? "px-4 lg:hidden lg:px-0" : "px-4"
                  }`}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={`dark:text-text-dark-secondary-text text-[0.65rem] text-light-secondary-text opacity-75 transition-all duration-150 ${
                      menuIndex === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </div>

                <div
                  className={`mr-1 flex w-[35px] justify-center ${
                    isNavbarShrunken ? "lg:mr-0 lg:w-full" : ""
                  } ${
                    !isNavbarShrunken &&
                    pathname.includes(title) &&
                    menuIndex !== index
                      ? "text-focus dark:text-dark-primary-text"
                      : ""
                  } ${
                    isNavbarShrunken &&
                    pathname.includes(title) &&
                    popMenuIndex !== index
                      ? "text-focus dark:text-dark-primary-text"
                      : ""
                  }`}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div
                  className={`${isNavbarShrunken ? "lg:hidden" : ""} ${
                    pathname.includes(title) && menuIndex !== index
                      ? "text-focus dark:text-dark-primary-text"
                      : ""
                  }`}>
                  {item.title}
                </div>
              </button>
            </div>
            <NavPopContent
              item={item}
              index={index}
              mouseEnterHandler={mouseEnterHandler}
            />
            <NavSubContent
              item={item}
              index={index}
            />
          </Fragment>
        );
      })}
    </div>
  );
};

export default NavContent;
