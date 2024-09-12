import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "@/components/common/Avatar";

const ChatMessageList = () => {
  const { chatRoomUsers } = useSelector((state) => state.chatRoom);

  return (
    <ul>
      {chatRoomUsers.map((user, index) => (
        <li
          key={index}
          className={`active py-1.5 px-6 transition-all duration-300 ${
            user.active ? "bg-green-600" : "hover:bg-gray-200"
          }`}
        >
          <Link to={user.id}>
            <div className="flex items-center">
              <div className="chat-user-img me-2 ms-0 online">
                <Avatar user={user} />
              </div>
              <div className="overflow-hidden">
                <p
                  className={`text-sm ${user.active ? "text-white" : "text-gray-700"} mb-0`}
                >
                  {user.firstName + " " + user.lastName}
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
