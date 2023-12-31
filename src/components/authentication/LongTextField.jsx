import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LongTextField = (props) => {
  const {
    id,
    label,
    type,
    placeholder,
    icon,
    autoComplete,
    width,
    marginBottom,
  } = props;
  return (
    <div
      className={`${width ? width : ""} ${
        label && !marginBottom
          ? "mb-4"
          : !label && !marginBottom
            ? "mb-2"
            : !marginBottom
              ? marginBottom
              : ""
      } `}>
      {label && (
        <label
          htmlFor={id}
          className="pl-4 text-[0.64rem] font-semibold uppercase text-light-primary-text dark:text-dark-secondary-text">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          autoComplete={autoComplete ? autoComplete : null}
          className={`w-full rounded-md border border-light-primary-border py-2  pr-4 text-[0.8rem] font-medium text-light-primary-text transition duration-300 ease-in-out focus:border-focus focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0),inset_0_0_0_30px_#fff,0_0_0_.25rem_rgba(56,116,255,.25)] focus:outline-0 dark:border-dark-primary-border dark:bg-dark-primary-bg dark:text-dark-secondary-text dark:focus:border-focus dark:focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0),inset_0_0_0_30px_#141824,0_0_0_.25rem_rgba(56,116,255,.25)] ${
            icon ? "pl-10" : "pl-4"
          }`}
        />
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="absolute left-4 top-3 text-[0.8rem] text-light-primary-text dark:text-dark-secondary-text"
          />
        )}
      </div>
    </div>
  );
};

export default LongTextField;
