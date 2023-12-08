const AuthenticationLayout = (props) => {
  const { children } = props;
  return (
    <div className="relative w-full bg-light-primary-border">
      <div className="absolute left-0 top-0 min-h-full w-full overflow-hidden bg-[url('/img/bg/37.png')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container relative mx-auto flex min-h-[calc(100vh-66px)] items-center justify-center py-8">
        <div className="relative flex w-2/5 justify-center rounded-lg border border-light-primary-border bg-light-primary-bg p-12 ">
          <div className="w-[25rem]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
