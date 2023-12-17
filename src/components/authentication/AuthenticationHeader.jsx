import Link from "next/link";
import Image from "next/image";

const AuthenticationHeader = (props) => {
  const { title, titleClass, description, descriptionClass, img, imgClass } =
    props;

  return (
    <div className="mb-12 flex flex-col items-center">
      <Link
        href="/dashboard"
        className="mb-6">
        <Image
          src={img ? img : "/img/logos/logo.png"}
          width="0"
          height="0"
          sizes="100vw"
          className={imgClass ? imgClass : "h-auto w-[58px]"}
          alt=""
        />
      </Link>
      <div
        className={`mb-1 text-light-primary-text transition duration-100 dark:text-dark-primary-text ${
          titleClass ? titleClass : "text-2xl font-bold"
        }`}>
        {title}
      </div>
      <div
        className={`text-center font-light text-light-secondary-text dark:text-dark-secondary-text ${
          descriptionClass ? descriptionClass : ""
        }`}>
        {description}
      </div>
    </div>
  );
};

export default AuthenticationHeader;
