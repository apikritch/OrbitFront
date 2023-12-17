"use client";
import Link from "next/link";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongTextField from "@/components/authentication/LongTextField";
import LongButton from "@/components/authentication/LongButton";
import AuthenticationCheckbox from "@/components/authentication/AuthenticationCheckbox";

const SignIn = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <AuthenticationHeader
        title="Sign In"
        description="Get access to your account"
      />
      <form onSubmit={submitHandler}>
        <LongTextField
          id="email"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          autoComplete="username"
          icon={faUser}
        />
        <LongTextField
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          autoComplete="current-password"
          icon={faKey}
        />
        <div className="mb-12 flex justify-between">
          <AuthenticationCheckbox id="rememberMe">
            Remember me
          </AuthenticationCheckbox>
          <Link
            href="/forgot-password"
            alt=""
            className="dark:text-link hover:dark:text-hover-link text-[0.8rem] font-medium text-button hover:text-hover-button hover:underline">
            Forgot Password?
          </Link>
        </div>
        <LongButton>Sign In</LongButton>
        <div className="text-center">
          <Link
            href="/sign-up"
            alt=""
            className="dark:text-link hover:dark:text-hover-link w-full text-[0.8rem] font-semibold text-button hover:text-hover-button hover:underline">
            Create an account
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
