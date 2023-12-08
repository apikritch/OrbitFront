import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const NavSubContent = (props) => {
  const { item, index } = props;

  const pathname = usePathname();

  const menuIndex = useSelector((state) => state.navbar.menuIndex);
  const isNavbarShrunken = useSelector(
    (state) => state.navbar.isNavbarShrunken
  );

  return (
    <ul
      style={{
        height: menuIndex === index ? item.children.length * 33.61 : 0,
      }}
      className={`mx-3 overflow-hidden transition-all duration-300 ${
        isNavbarShrunken ? "lg:hidden" : ""
      }`}>
      {item.children.map((itm, indx) => (
        <li key={indx}>
          <Link href={itm.route}>
            <div
              className={`dark:hover:bg-dark-quaternary-bg rounded-lg py-[0.375rem] pl-20 pr-4 text-[0.9rem] duration-150 ease-in-out hover:bg-light-tertiary-bg dark:hover:text-dark-primary-text ${
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
  );
};

export default NavSubContent;
