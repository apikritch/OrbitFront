"use client";
import AuthenticationHeader from "@/components/authentication/AuthenticationHeader";
import LongButton from "@/components/authentication/LongButton";
import LongTextField from "@/components/authentication/LongTextField";

const ResetPassword = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <>
      <AuthenticationHeader
        title="Reset new password"
        titleClass="text-[1.25rem] font-semibold"
        description="Type your new password"
      />
      <form onSubmit={submitHandler}>
        <div className="hidden">
          <LongTextField
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <LongTextField
            id="password"
            type="password"
            placeholder="Type new password"
            autoComplete="new-password"
          />
          <LongTextField
            id="confirmPassword"
            type="password"
            placeholder="Confirm new password"
            autoComplete="new-password"
          />
        </div>
        <LongButton>Reset Password</LongButton>
      </form>
    </>
  );
};

export default ResetPassword;
