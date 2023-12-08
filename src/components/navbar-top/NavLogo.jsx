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
              width={100}
              height={100}
              alt=""
              className="w-[27px]"
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
