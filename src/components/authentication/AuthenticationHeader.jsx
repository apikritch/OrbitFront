import Link from "next/link";
import Image from "next/image";

const AuthenticationHeader = (props) => {
  const { title, description } = props;

  return (
    <div className="mb-12 flex flex-col items-center">
      <Link
        href="/dashboard"
        className="mb-6">
        <Image
          src="/img/logos/logo.png"
          width={100}
          height={100}
          alt=""
          className="w-[58px]"
        />
      </Link>
      <div className="mb-1 text-2xl font-extrabold text-light-primary-text">
        {title}
      </div>
      <div className="font-light text-light-secondary-text">{description}</div>
    </div>
  );
};

export default AuthenticationHeader;
