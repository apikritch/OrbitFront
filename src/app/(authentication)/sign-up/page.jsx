"use client";
import Link from "next/link";
import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongButton from "@/components/authentication/LongButton";
import LongTextField from "@/components/authentication/LongTextField";
import AuthenticationCheckbox from "@/components/authentication/AuthenticationCheckbox";

const SignUp = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <AuthenticationHeader
        title="Sign Up"
        description="Create your account today"
      />
      <form onSubmit={submitHandler}>
        <LongTextField
          id="email"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          autoComplete="username"
        />
        <div className="grid grid-cols-2 gap-4">
          <LongTextField
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            autoComplete="new-password"
          />
          <LongTextField
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            autoComplete="new-password"
          />
        </div>
        <div className="mb-5 mt-1">
          <AuthenticationCheckbox id="termService">
            I accept the terms and privacy policy
          </AuthenticationCheckbox>
        </div>
        <LongButton>Sign Up</LongButton>
        <div className="text-center">
          <Link
            href="/sign-in"
            alt=""
            className="dark:text-link hover:dark:text-hover-link w-full text-[0.8rem] font-semibold text-button hover:text-hover-button hover:underline">
            Sign in to an existing account
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignUp;
