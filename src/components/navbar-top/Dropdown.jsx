import { useRef } from "react";
import { useTheme } from "next-themes";

const clickOutsideRef = (content, toggle) => {
  document.addEventListener("mousedown", (e) => {
    if (toggle.current && toggle.current.contains(e.target)) {
      if (content.current) {
        content.current.classList.toggle("hidden");
      }
    } else {
      if (content.current && !content.current.contains(e.target)) {
        content.current.classList.add("hidden");
      }
    }
  });
};

const Dropdown = (props) => {
  const { children, button, width, right } = props;

  const { theme } = useTheme();

  const dropdownToggleElement = useRef(null);
  const dropdownContentElement = useRef(null);

  const toggleDropdown = () => {
    if (dropdownContentElement.current) {
      dropdownContentElement.current.classList.toggle("hidden");
    }
  };

  clickOutsideRef(dropdownContentElement, dropdownToggleElement);

  return (
    <div className="flex items-center">
      <button
        ref={dropdownToggleElement}
        type="button"
        onClick={toggleDropdown}
        className="my-0">
        {button}
      </button>
      <div
        className="relative hidden"
        ref={dropdownContentElement}>
        <div
          className={`${
            theme === "dark" ? "dark-user-dropdown" : "light-user-dropdown"
          } user-dropdown absolute left-auto top-10 z-50 overflow-visible rounded-md border border-light-primary-border dark:border-dark-primary-border ${width} ${right}`}>
          <div className="relative flex flex-col rounded-md border-0 bg-white dark:bg-dark-primary-bg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
