import React from "react";
import { useSelector } from "react-redux";

const UserChatContainer = ({ children }) => {
  const { selectedUser } = useSelector((state) => state.chatRoom);

  return (
    <div className="user-chat relative w-full h-[calc(100vh-60px)] lg:h-auto overflow-hidden bg-[url(https://doot-dark.react.themesbrand.com/static/media/pattern-05.ffd181cdf9a08b200998.png)]">
      <div className="user-chat-overlay"></div>
      <div className="h-full w-full">
        {selectedUser && <div className="lg:flex h-full">{children}</div>}
      </div>
    </div>
  );
};

export default UserChatContainer;
