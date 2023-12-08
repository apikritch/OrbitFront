import Link from "next/link";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongTextField from "@/components/authentication/LongTextField";
import LongButton from "@/components/authentication/LongButton";
import AuthenticationCheckbox from "@/components/authentication/AuthenticationCheckbox";

const SignIn = () => {
  return (
    <>
      <AuthenticationHeader
        title="Sign In"
        description="Get access to your account"
      />
      <form>
        <LongTextField
          id="email"
          type="email"
          label="Email Address"
          placeholder="name@example.com"
          icon={faUser}
        />
        <LongTextField
          id="password"
          type="password"
          label="Password"
          placeholder="Password"
          icon={faKey}
        />
        <div className="mb-12 flex justify-between">
          <AuthenticationCheckbox
            id="rememberMe"
            text="Remember me"
          />
          <Link
            href="/reset-password"
            alt=""
            className="text-button hover:text-hover-button text-[0.8rem] font-medium hover:underline">
            Forgot Password?
          </Link>
        </div>
        <LongButton text="Sign In" />
        <div className="text-center">
          <Link
            href="/sign-up"
            alt=""
            className="text-button hover:text-hover-button w-full text-[0.8rem] font-semibold hover:underline">
            Create an account
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignIn;
