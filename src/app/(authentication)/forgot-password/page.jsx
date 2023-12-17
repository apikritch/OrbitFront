"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongButton from "@/components/authentication/LongButton";
import LongTextField from "@/components/authentication/LongTextField";

const ForgotPassword = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <AuthenticationHeader
        title="Forgot your password?"
        titleClass="text-[1.25rem] font-semibold"
        description="Enter your email below and we will send you a reset link"
        descriptionClass="px-9"
      />
      <form
        onSubmit={submitHandler}
        className="mb-8 flex items-center gap-2">
        <LongTextField
          id="email"
          type="email"
          placeholder="Email"
          width="w-3/4"
          marginBottom="mb-0"
        />
        <LongButton
          width="w-1/4"
          marginBottom="mb-0"
          leading="leading-[0]">
          Send
          <FontAwesomeIcon
            icon={faAngleRight}
            className="ml-2 text-[1rem]"
          />
        </LongButton>
      </form>
      <div className="text-center">
        <Link
          href="#"
          alt=""
          className="dark:text-link hover:dark:text-hover-link w-full text-[0.8rem] font-semibold text-button hover:text-hover-button hover:underline">
          Still having problems?
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
