import Link from "next/link";
import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongButton from "@/components/authentication/LongButton";
import LongTextField from "@/components/authentication/LongTextField";

const ResetPassword = () => {
  return (
    <>
      <AuthenticationHeader
        title="Reset new password"
        description="Type your new password"
      />
      <form>
        <div className="mb-6">
          <LongTextField
            id="password"
            type="password"
            placeholder="Type new password"
          />
          <LongTextField
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
          />
        </div>
        <LongButton text="Reset Password" />
      </form>
    </>
  );
};

export default ResetPassword;
