import Image from "next/image";
import Link from "next/link";
import NavToggler from "./NavToggler";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      <NavToggler />
      <div className="w-[15rem]">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/img/logos/logo.png"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-[27px]"
              alt=""
            />
            <div className="ml-2 text-2xl font-semibold text-light-secondary-text dark:text-dark-primary-text">
              ORBIT
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavLogo;
