import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Avatar from "@/components/common/Avatar";
import {
  setSelectedUser,
  setUserMessages,
} from "@/features/auth/reducers/chat/chatSlice";
import {
  handleCompareCases,
  handleCompareUsers,
  handleUserName,
} from "@/helpers";
import { getUserMessages } from "@/services";
import { useEffect } from "react";
const ChatMessageList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { userMessages } = useSelector((state) => state.chatRoom);

  const { chatRoomUsers, selectedUser } = useSelector(
    (state) => state.chatRoom,
  );

  useEffect(() => {
    if (selectedUser && !userMessages[selectedUser.id]) {
      fetchMessages(selectedUser.id);
    }
    console.log(userMessages);
  }, [selectedUser]);

  const fetchMessages = async (userId) => {
    const messages = await getUserMessages(userId);
    dispatch(setUserMessages({ userId, messages }));
    console.log(messages);
  };

  const handleSelectUser = async (user) => {
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

  return (
    <ul>
      {filteredRoomUsers.map((user, index) => (
        <li
          key={index}
          className={`${activeUser(user)} py-1.5 ps-5 transition-all duration-300`}
        >
          <Link to={user.id} onClick={() => handleSelectUser(user)}>
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
