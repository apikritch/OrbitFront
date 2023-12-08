import ThemeSwitch from "@/components/navbar-top/ThemeSwitch";
import UserDropdown from "./UserDropdown";
import FeatureDropdown from "./FeatureDropdown";
import NotificationDropdown from "./NotificationDropdown";

const NavIcons = () => {
  return (
    <div className="flex w-[15rem] items-center justify-end">
      <div className="ml-4">
        <ThemeSwitch />
      </div>
      <div className="ml-4">
        <NotificationDropdown />
      </div>
      <div className="ml-4">
        <FeatureDropdown />
      </div>
      <div className="ml-4">
        <UserDropdown />
      </div>
    </div>
  );
};

export default NavIcons;
