import DropdownItem from "./DropdownItem";

import HelpIcon from "@/shared/components/icons/HelpIcon";
import LogoutIcon from "@/shared/components/icons/LogoutIcon";
import SettingsIcon from "@/shared/components/icons/SettingsIcon";

const UserSettings = () => {
  const dropdownItems = [
    {
      icon: <SettingsIcon />,
      title: "Settings",
      path: "/@me/settings",
      description: "Access widget settings",
    },
    {
      icon: <HelpIcon />,
      title: "Help",
      path: "/@me/help",
      description: "Contact our support",
    },
    {
      icon: <LogoutIcon />,
      title: "Log out",
      path: "/login",
      description: "Log out from your account",
    },
  ];

  return (
    <div className="user-settings">
      {dropdownItems.map((item, index) => (
        <DropdownItem key={index} path={item.path} title={item.title}>
          <span className="flex-center h-[35px] w-[35px]">{item.icon}</span>
          <div style={{ lineHeight: 1.1 }}>
            <h4
              className="text-[.8rem] text-[#393a4f] font-medium dark:text-white"
              id="user-name"
            >
              {item.title}
            </h4>
            <small className="text-[.75rem] text-[#757a91]">
              {item.description}
            </small>
          </div>
        </DropdownItem>
      ))}
    </div>
  );
};

export default UserSettings;
