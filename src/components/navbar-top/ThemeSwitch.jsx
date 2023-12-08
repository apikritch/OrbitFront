"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const clickHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#ffcc853d] text-[#e5780b] transition duration-300 ease-in-out hover:bg-[#e5780b] hover:text-[#fff6e0] dark:bg-[#3874ff3d] dark:text-[#85a9ff] dark:hover:bg-[#3874ffb3] dark:hover:text-[#f5f8ff]"
      onClick={clickHandler}>
      <i className="lni lni-sun block pl-[0.1rem] pt-[0.1m] !text-[1.15rem] dark:hidden"></i>
      <FontAwesomeIcon
        icon={faMoon}
        className="hidden dark:block"
      />
    </div>
  );
};

export default ThemeSwitch;
