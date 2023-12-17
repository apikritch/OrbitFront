import React from "react";

const LongButton = (props) => {
  const { onClick, width, marginBottom, leading, children } = props;
  return (
    <button
      onClick={onClick ? onClick : null}
      className={`flex items-center justify-center rounded-md bg-button py-[0.7rem] text-[0.8rem] font-semibold text-white transition duration-300 hover:bg-hover-button ${
        width ? width : "w-full"
      } ${marginBottom ? marginBottom : "mb-4"} ${
        leading ? leading : "leading-none"
      }`}>
      {children}
    </button>
  );
};

export default LongButton;
