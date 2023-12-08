import React from "react";

const LongButton = (props) => {
  const { text } = props;
  return (
    <button
      type="submit"
      className="bg-button hover:bg-hover-button mb-4 w-full rounded-md py-[0.625rem] text-[0.8rem] font-semibold text-white transition duration-300">
      {text}
    </button>
  );
};

export default LongButton;
