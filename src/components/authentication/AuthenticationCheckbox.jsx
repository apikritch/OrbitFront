import React from "react";

const AuthenticationCheckbox = (props) => {
  const { id, text } = props;
  return (
    <label
      for={id}
      className="mt-1 flex items-center">
      <input
        type="checkbox"
        id={id}
      />
      <span className="text-[0.8rem] font-semibold leading-none text-light-primary-text">
        {text}
      </span>
    </label>
  );
};

export default AuthenticationCheckbox;
