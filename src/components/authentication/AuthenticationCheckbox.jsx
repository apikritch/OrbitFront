import { useTheme } from "next-themes";

const AuthenticationCheckbox = (props) => {
  const { id, children } = props;

  const { theme } = useTheme();

  return (
    <label
      htmlFor={id}
      className="mt-1 flex items-center">
      <input
        type="checkbox"
        id={id}
        className={`transition duration-300 ${
          theme === "dark" ? "dark-checkbox" : "light-checkbox"
        }`}
      />
      <span className="text-[0.8rem] font-medium leading-none text-light-primary-text dark:text-dark-secondary-text">
        {children}
      </span>
    </label>
  );
};

export default AuthenticationCheckbox;
