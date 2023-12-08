import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";

const NavPopContent = (props) => {
  const { item, index, mouseEnterHandler } = props;

  const pathname = usePathname();
  const { theme } = useTheme();

  const isNavbarShrunken = useSelector(
    (state) => state.navbar.isNavbarShrunken
  );
  const popMenuIndex = useSelector((state) => state.navbar.popMenuIndex);

  return (
    <div
      onMouseEnter={() => mouseEnterHandler(index)}
      onMouseLeave={() => mouseEnterHandler(null)}
      className={`absolute left-full -translate-y-11 pl-4`}>
      <ul
        className={`hidden w-[220px] overflow-visible rounded-md border border-light-primary-border bg-light-primary-bg dark:border-dark-primary-border dark:bg-dark-primary-bg ${
          isNavbarShrunken && popMenuIndex === index ? "lg:block" : ""
        }  ${isNavbarShrunken && popMenuIndex === index ? "sub-menu" : ""} ${
          theme === "dark" ? "dark-sub-menu" : "light-sub-menu"
        }`}>
        <li className="border-b border-light-primary-border px-5 py-3 text-[0.9rem] text-light-primary-text dark:border-dark-primary-border dark:text-dark-secondary-text">
          {item.title}
        </li>
        {item.children.map((itm, indx) => (
          <li key={indx}>
            <Link href={itm.route}>
              <div
                className={`dark:hover:bg-dark-quaternary-bg px-10 py-[0.375rem] text-[0.85rem] duration-150 ease-in-out hover:bg-light-tertiary-bg dark:hover:text-dark-primary-text ${
                  indx === 0
                    ? "mt-3"
                    : indx === item.children.length - 1
                      ? "mb-3"
                      : ""
                } ${
                  pathname === itm.route
                    ? "text-focus dark:text-dark-primary-text"
                    : "text-light-secondary-text hover:text-light-primary-text  dark:text-dark-secondary-text"
                }`}>
                {itm.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavPopContent;
