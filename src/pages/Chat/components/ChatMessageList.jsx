import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserMessages } from "@/services";
import {
  setSelectedUser,
  setUserMessages,
} from "@/features/auth/reducers/chat/chatSlice";
import Avatar from "@/components/common/Avatar";
import {
  handleCompareCases,
  handleCompareUsers,
  handleUserName,
} from "@/helpers";

const ChatMessageList = ({ searchQuery }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userMessages } = useSelector((state) => state.chatRoom);
  const { chatRoomUsers, selectedUser } = useSelector(
    (state) => state.chatRoom,
  );

  const handleSelectUser = (user) => {
    dispatch(setSelectedUser(user));
  };

  const filteredRoomUsers = chatRoomUsers.filter((user) =>
    handleUserName(user).toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const selected = (user) =>
    handleCompareUsers(selectedUser, user, "text-white", "text-gray-700");

  const activeUser = (user) =>
    handleCompareCases(
      selectedUser?.id === user.id,
      "bg-[#3d70b2] text-white",
      "text-black hover:bg-gray-200 dark:hover:bg-gray-600/30",
    );

  const setSelectedUserLink = (user) => {
    const queryParams = new URLSearchParams({
      selected: user.id,
      username: user.firstName,
    });

    return "?" + queryParams.toString();
  };
  // useEffect(() => {
  //   // handleSelectUser(filteredRoomUsers.find((user) => user.id === userId));
  //   console.log(filteredRoomUsers.find((user) => user.id === userId))
  // }, [userId]);

  return (
    <ul>
      {filteredRoomUsers.map((user, index) => (
        <li
          key={index}
          className={`${activeUser(user)} py-1.5 ps-5 transition-all duration-300`}
        >
          <Link
            to={setSelectedUserLink(user)}
            onClick={() => handleSelectUser(user)}
          >
            <div
              className="flex items-center"
              onClick={() => handleSelectUser(user)}
            >
              <div className="chat-user-img me-2 ms-0 online">
                <Avatar user={user} selectedUser={selectedUser} />
              </div>
              <div className="overflow-hidden">
                <p
                  className={`${selected(user)} text-sm dark:text-white/90 mb-0`}
                >
                  {handleUserName(user)}&nbsp;
                  <span className="text-xs opacity-75">
                    {user.self && "(You)"}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ChatMessageList;
