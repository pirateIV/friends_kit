import { useState, useEffect, useCallback } from "react";
import io from "socket.io-client";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AvatarComponent } from "@/components/feed";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import SearchIcon from "@/shared/components/icons/SearchIcon";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import axios from "axios";
import { twMerge } from "tailwind-merge";

const socket = io("http://localhost:5000");

const Chat = () => {
  const location = useLocation();
  const { user } = useSelector(selectCurrentUser);
  const { name } = user || {};
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const { userId } = useParams();

  const handleSendMessage = async () => {
    const messageObject = {
      sent: true,
      sender: user.id,
      receiver: userId,
      content: message,
      timestamp: new Date(),
    };
    socket.emit("send_message", messageObject);
    setChat((prevChat) => [...prevChat, messageObject]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      socket.emit("join", user.id); // Join room based on user ID
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("receive_message", (message) => {
      setChat((prevChat) => [...prevChat, message]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receive_message");
    };
  }, [user.id]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        const [receivedMessages, sentMessages] = await Promise.all([
          axios.get(`http://localhost:5000/api/messages/received`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`http://localhost:5000/api/messages/sent`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        const sent = sentMessages.data.map((msg) =>
          msg ? { ...msg, sent: true } : null,
        );
        const received = receivedMessages.data.map((msg) =>
          msg ? { ...msg, received: true } : null,
        );
        const allChats = [...sent, ...received].sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp),
        );
        setChat(allChats);
      } catch (error) {
        console.error("Error fetching messages", error);
      }
    };

    if (userId) {
      fetchMessages();
    }
  }, [userId]);

  return (
    <div className="min-h-screen flex">
      <aside className="sidebar py-4 flex flex-col items-center min-h-screen bg-white border-r border-gray-300">
        <img src="/logo.svg" width="45" height="45" alt="logo" />
        <div className="friends-sidebar-list mt-5 px-t5 flex-1 w-full">
          <Link key={user.id} className="p-2 px-4 mx-auto" to={user.id}>
            <AvatarComponent />
            <div className="ml-4">
              <div>{name}</div>
              <div className="text-sm text-gray-500">{isConnected}</div>
            </div>
          </Link>
          {user?.friends.map((friend) => (
            <Link key={friend.id} className="p-2 px-4 mx-auto" to={friend.id}>
              <AvatarComponent />
              <div className="ml-4">
                <div>{friend.name}</div>
                <div className="text-sm text-gray-500">{friend.status}</div>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      <div className="flex flex-1 flex-col min-h-screen">
        <header className="h-auto">
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
                <SearchIcon className="absolute ms-2 text-gray-400" />
                <input
                  type="search"
                  className="border p-1.5 ps-9 rounded-full bg-gray-300 border-gray-300 placeholder:text-gray-500 focus:border-blue-500 outline-none"
                  placeholder="search friends"
                />
              </div>
              <Link to="/@me">
                <AvatarComponent />
              </Link>
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <div className="chats-container flex-1 flex flex-col p-4 h-full overflow-scroll">
          <div className="messages flex-1 overflow-y-auto p-4 bg-gray-100 dark:bg-[#202937] rounded-lg space-y-4">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={twMerge(
                  "flex",
                  msg.sent ? "justify-start" : "justify-end",
                )}
              >
                <div
                  className={twMerge(
                    msg.sent ? "bg-white" : "bg-[#3d70b2]",
                    "rounded-lg p-2 px-4 shadow-mui-1 min-w-24 max-w-lg break-words",
                  )}
                >
                  <p className="text-wrap text-[13px]">{msg.content}</p>
                  <p
                    className={twMerge(
                      msg.sent ? "text-gray-600" : "text-white/70",
                      "text-[11px] text-right leading-none mt-2",
                    )}
                  >
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="send-message flex mt-4">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-r-lg"
            >
              Send
            </button>
          </div>
          <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <header className="p-4 flex items-center justify-between">
              <h3>Details</h3>
            </header>
            {selectedFriend && (
              <div className="p-4">
                <AvatarComponent />
                <div>{selectedFriend.name}</div>
                <div className="text-sm text-gray-600">
                  {selectedFriend.status}
                </div>
                <div className="mt-4">
                  <div className="font-semibold">Email:</div>
                  <div>{selectedFriend.email}</div>
                  <div className="font-semibold mt-2">Phone:</div>
                  <div>{selectedFriend.phone}</div>
                </div>
              </div>
            )}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

const Drawer = ({ isOpen, onClose, children }) => {
  const variants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 bottom-0 right-0 z-50 flex"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative flex-1 max-w-lg w-full bg-white border-l border-gray-300 p-4">
        <button onClick={onClose} className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {children}
      </div>
    </motion.div>
  );
};

export default Chat;
