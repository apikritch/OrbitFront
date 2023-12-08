import Link from "next/link";
import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongButton from "@/components/authentication/LongButton";
import LongTextField from "@/components/authentication/LongTextField";
import AuthenticationCheckbox from "@/components/authentication/AuthenticationCheckbox";

const ResetPassword = () => {
  return (
    <>
      <AuthenticationHeader
        title="Sign Up"
        description="Create your account today"
      />
      <form>
        <LongTextField
          id="email"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
        />
        <div className="grid grid-cols-2 gap-4">
          <LongTextField
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <LongTextField
            id="confirmPassword"
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="mb-5 mt-1">
          <AuthenticationCheckbox
            id="termService"
            text="I accept the terms and privacy policy"
          />
        </div>
        <LongButton text="Sign Up" />
        <div className="text-center">
          <Link
            href="/sign-in"
            alt=""
            className="text-button hover:text-hover-button w-full text-[0.8rem] font-semibold hover:underline">
            Sign in to an existing account
          </Link>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
