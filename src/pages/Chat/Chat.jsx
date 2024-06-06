import { socket } from "@/socket";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import useUserData from "@/hooks/useUserData";
import logo from "@/assets/images/logo/logo.svg";
import { AvatarComponent } from "@/components/feed";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import SearchIcon from "@/shared/components/icons/SearchIcon";
import { selectCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { Avatar } from "@material-tailwind/react";

const Chat = () => {
  const user = useUserData();
  const { name } = useSelector(selectCurrentUser);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const friendId = useParams();

  useEffect(() => {
    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));
    socket.on("message", (message) =>
      setMessages((prev) => [...prev, message]),
    );

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, []);

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
    setIsDrawerOpen(true);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const message = {
        content: newMessage,
        user: { name, id: user.id },
        receiver: { friendId } || { id: user.id },
      };
      socket.emit("message", message);
      // setMessages((prev) => [...prev, message]);
      setNewMessage("");
    }
  };

  console.log(user);

  return (
    <div className="min-h-screen flex">
      <aside className="sidebar py-4 flex flex-col items-center min-h-screen bg-white border-r border-gray-300">
        <img src={logo} width="45" height="45" alt="logo" />

        <div className="friends-sidebar-list mt-5 px-t5 flex-1 w-full">
          {user?.friends.map((friend) => (
            <Link
              key={friend.id}
              className="p-2 px-4 mx-auto"
              // className="flex items-center justify-center w-full p-2 hover:bg-gray-200"
              to={friend.id}
            >
              {/* <Avatar status="online" statusPosition="top-right" rounded/> */}
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
                <SearchIcon cs={"absolute ms-2 text-gray-400"} />

                <input
                  type="search"
                  className="border p-1.5 ps-9 rounded-full bg-gray-300 border-gray-300 placeholder:text-gray-500 focus:border-blue-500 outline-none"
                  placeholder="search friends"
                  name=""
                  id=""
                />
              </div>

              <Link to="/@me">
                <AvatarComponent />
              </Link>
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <div className="chats-container flex-1 flex flex-col p-4">
          <div className="messages flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg">
            {messages.map((msg, index) => (
              <div
                key={index}
                className="ml-auto rounded-lg min-w-[200px] rounded-tr-none my-1 p-2 text-sm bg-[#b7b6ff] flex flex-col relative shadow-mui-1 speech-bubble-right"
              >
                <p className="text-wrap">{msg.text}</p>
                <p className="text-gray-600 text-xs text-right leading-none">
                  {new Date().toLocaleTimeString()}
                </p>
              </div>
            ))}
          </div>
          <div className="send-message flex mt-4">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
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
