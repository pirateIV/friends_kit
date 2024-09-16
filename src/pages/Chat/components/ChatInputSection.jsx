import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Import the Slate editor factory.
import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

import EmojiPicker from "emoji-picker-react";

import { socket } from "@/socket";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const getTypedText = (arr) => {
  return arr.map((item) => item.children.map((child) => child.text).toString());
};

const ChatInputSection = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const { selectedUser } = useSelector((state) => state.chatRoom);

  const [message, setMessage] = useState([]);

  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleSendMessage = (e) => {
    e.preventDefault();

    socket.emit("private message", {
      message,
      to: selectedUser?.id,
    });
  };

  const handleSetMessage = (message) => {
    // setMessage([...message]);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    console.log(emoji.emoji);
  };

  return (
    <div className="chat-input-section relative bottom-0 z-10 p-4 lg:p-6 mt-auto [@supports(backdrop-filter:blur(7px))]:backdrop-blur border-t border-[#eaeaf1] dark:border-[#333]">
      <div className="hidden">
        <EmojiPicker
          onEmojiClick={handleEmojiSelect}
          className=""
          style={{
            position: "absolute",
            top: "-450%",
            height: "400px",
          }}
        />
      </div>
      <form id="chatinput-form" onSubmit={handleSendMessage}>
        <div className="flex items-end">
          <div className="relative chat-input-links me-2">
            <button type="button">
              <i className="bx bx-dots-horizontal-rounded align-middle"></i>
            </button>
            <button type="button" id="emoji-btn">
              <i className="bx bx-smile align-middle"></i>
            </button>
          </div>

          <div className="relative flex-1">
            <Slate
              editor={editor}
              initialValue={initialValue}
              onChange={handleSetMessage}
            >
              <Editable
                value={message}
                className="px-4 py-2 w-full text-sm text-gray-900 border bg-white outline-none max-h-32 overflow-y-auto [scrollbar-width:thin] rounded-md placeholder:text-gray-600 dark:text-gray-100 dark:placeholder:text-gray-400 dark:bg-[#343434] dark:border-transparent"
                onChange={(e) => setMessage(e)}
                placeholder="Type your message..."
              />
            </Slate>
          </div>

          <div className="flex ml-2">
            <button type="button" id="audio-btn">
              <i className="bx bx-microphone align-middle"></i>
            </button>
            <button
              type="submit"
              className="!text-white bg-[#3d70b2] rounded-md hover:bg-[#3467aa]"
            >
              <i className="bx bxs-send align-middle"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInputSection;
