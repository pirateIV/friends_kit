import { socket } from "@/socket";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useUserData from "@/hooks/useUserData";
import logo from "@/assets/images/logo/logo.svg";
import { AvatarComponent } from "@/components/feed";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import SearchIcon from "@/shared/components/icons/SearchIcon";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";

const Chat = () => {
  const user = useUserData();
  const { name } = useSelector(selectCurrentUser);
  const [isConnected, setIsConnected] = useState(socket.connected);

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between">
        <aside className="sidebar w-16 py-4 flex flex-col items-center min-h-screen bg-white border-r border-gray-300">
          <img src={logo} width="45" height="45" alt="logo" />

          <div className="friends-sidebar-list mt-5">
            {user?.friends.map((friend) => (
              <Link to={friend.id}>
                <AvatarComponent />
              </Link>
            ))}
          </div>
        </aside>

        <div className="flex flex-1 flex-col min-h-screen">
          <header className="h-40">
            <div className="bg-white flex px-4 py-2 items-center justify-between border-b border-gray-300">
              <div className="header-left flex items-center gap-5">
                <AvatarComponent />

                <div className="flex flex-col">
                  <div className="username">{name}</div>
                  <div className="status text-sm text-gray-600">
                    {isConnected ? "online" : ""}
                  </div>
                </div>
              </div>

              <div className="header-right flex items-center gap-4">
                <div className="search relative text-sm flex items-center">
                  <SearchIcon cs={"absolute ms-2 text-gray-400"} />

                  <input
                    type="search"
                    className="border p-1.5 ps-9 rounded-full border-gray-400 placeholder:text-gray-500 focus:border-blue-500 outline-none"
                    placeholder="search friends"
                    name=""
                    id=""
                  />
                </div>

                <Link to="/app/@me">
                  <AvatarComponent />
                </Link>
                <ThemeSwitcher />
              </div>
            </div>
          </header>

          <div className="chats-container h-full flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
