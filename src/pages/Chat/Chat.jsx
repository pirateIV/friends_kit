import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar } from "flowbite-react";
import io from "socket.io-client";

import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import NavbarLogo from "@/components/NavigationBar/NavbarLogo";
import { AvatarComponent } from "@/components/feed";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";

const socket = io("http://localhost:5000");

const ChatApp = () => {
  const { userId } = useParams();
  const { pathname } = useLocation();
  const { user } = useSelector(selectCurrentUser);

  const [friendsList] = useState(user?.friends);
  const [currentFriendId, setCurrentFriendId] = useState(userId);
  const [currentFriend, setCurrentFriend] = useState(null);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Handle socket connection
    socket.on("connect", () => {
      setIsConnected(true);
    });

    // Handle socket disconnection
    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    // Handle incoming messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Clean up socket events on component unmount
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    setCurrentFriendId(userId);
    const friend = friendsList?.find((friend) => friend.id === userId);
    setCurrentFriend(friend);
  }, [pathname]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const message = {
        sender: user.id,
        receiver: currentFriendId,
        content: messageInput,
      };
      socket.emit("send_message", message);
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessageInput("");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar friends={friendsList} />
      <div className="flex-1 flex flex-col">
        <ChatHeader user={user} currentFriend={currentFriend} />
        {currentFriendId && (
          <ChatContainer
            messages={messages}
            messageInput={messageInput}
            setMessageInput={setMessageInput}
            handleSendMessage={handleSendMessage}
          />
        )}
      </div>
    </div>
  );
};

const Sidebar = ({ friends }) => {
  return (
    <aside className="border-r border-gray-300 dark:border-[#252525] text-white flex flex-col items-center">
      <span className="ps-1">
        <NavbarLogo />
      </span>
      <div className="mt-4 flex flex-col items-center gap-2">
        {friends?.map((friend) => (
          <NavLink
            key={friend.id}
            to={`${friend.id}`}
            aria-label={friend.firstName}
          >
            {({ isActive }) => (
              <Avatar
                className={`mx-auto dark:text-blue-gray-800 ${isActive && " ring-blue-900"}`}
                rounded
              />
            )}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

const ChatHeader = ({ user, currentFriend }) => {
  const isUserOnline = socket.connected ? "online" : "";

  return (
    <header className="border-b border-gray-300 dark:border-[#252525] dark:text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <AvatarComponent />
          <div>
            {currentFriend ? (
              <div>
                <div>{currentFriend.firstName}</div>
                <div className="opacity-50 text-xs">{isUserOnline}</div>
              </div>
            ) : (
              <div>
                <div>
                  {`${user?.firstName} ${user?.lastName}`}{" "}
                  <span className="opacity-50 text-xs">(You)</span>
                </div>
                <div className="opacity-50 text-xs">{isUserOnline}</div>
              </div>
            )}
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

const ChatContainer = ({
  messages,
  messageInput,
  setMessageInput,
  handleSendMessage,
}) => {
  return (
    <>
      <main className="flex-1 bg-gray-400 dark:bg-[#2e384a] overflow-y-auto p-4">
        <div className="flex flex-col items-center justify-start space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender === "user" ? "user" : "friend"}
              message={msg.content}
            />
          ))}
        </div>
      </main>
      <ChatInput
        messageInput={messageInput}
        setMessageInput={setMessageInput}
        handleSendMessage={handleSendMessage}
      />
    </>
  );
};

const ChatMessage = ({ sender, message }) => {
  const messageClasses =
    sender === "user"
      ? "bg-blue-600 text-white justify-end"
      : "bg-gray-200 justify-start";
  return (
    <div
      className={`p-4 text-sm shadow-tiny rounded-lg w-auto ${messageClasses}`}
    >
      <p>{message}</p>
    </div>
  );
};

const ChatInput = ({ messageInput, setMessageInput, handleSendMessage }) => {
  return (
    <footer className="bg-gray-100 p-4 flex items-center">
      <input
        type="text"
        className="flex-1 border border-gray-300 p-2 rounded-lg"
        placeholder="Type a message..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </footer>
  );
};

export default ChatApp;
