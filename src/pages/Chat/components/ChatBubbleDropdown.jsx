import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { socket } from "@/socket";
import { useDispatch } from "react-redux";
import { setUpdatedMessage } from "@/features/auth/reducers/chat/chatSlice";

const ChatBubbleDropdown = ({ messageFromSelf, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("edit:message", (editedMessage) => {
      console.log(editedMessage);
    });
  }, []);

  const handleEditMessage = (id) => {
    socket.emit("edit:message", id);
  };

  const handleDeleteMessage = (id) => {
    socket.emit("delete:message", id);
    dispatch(
      setUpdatedMessage({ id, user: socket.auth.userID, actionType: "delete" }),
    );
  };

  return (
    <button
      className={cn(
        "chat-bubble__options-button group relative inline-block",
        messageFromSelf ? "-right-2" : "hidden",
      )}
    >
      <i className="bx bx-dots-vertical-rounded align-middle"></i>

      <div className="chat-bubble__dropdown group-focus:block hidden absolute right-5 top-6">
        <ul className="space-y-1 text-slate-900 dark:text-white text-xs font-medium">
          <li
            className="chat-bubble__dropdown-item"
            onClick={() => handleEditMessage(id)}
          >
            <i className="bx bxs-edit me-2 text-gray-600 dark:text-gray-300"></i>
            Edit
          </li>
          <li
            className="chat-bubble__dropdown-item"
            onClick={() => handleDeleteMessage(id)}
          >
            <i className="bx bxs-trash me-2 text-red-400 dark:text-red-500"></i>
            Delete
          </li>
          <li
            className="chat-bubble__dropdown-item"
            onClick={() => console.log(`Copy message with id: ${id}`)}
          >
            <i className="bx bx-clipboard me-2 text-gray-600 dark:text-gray-300"></i>
            Copy Message
          </li>
        </ul>
      </div>
    </button>
  );
};

export default ChatBubbleDropdown;
