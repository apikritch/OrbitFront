"use client";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongButton from "@/components/authentication/LongButton";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SignOut = () => {
  const router = useRouter();

  const { theme } = useTheme();

  const clickHandler = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <AuthenticationHeader
        img={
          theme === "dark"
            ? "/img/illustrations/dark_1.png"
            : "/img/illustrations/1.png"
        }
        imgClass="w-[225px] h-auto"
        title="Come back soon!"
        titleClass="text-[1.25rem] font-semibold"
        description="Thanks for using Orbit. You are now successfully signed out."
        descriptionClass="px-2"
      />
      <LongButton
        leading="leading-[0]"
        onClick={clickHandler}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="mr-2 text-[1rem]"
        />
        Go to sign in page
      </LongButton>
    </>
  );
};

export default SignOut;
