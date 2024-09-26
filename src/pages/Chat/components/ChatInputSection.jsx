import { useState } from "react";
import { useSelector } from "react-redux";
import EmojiPicker from "emoji-picker-react";

// Import the Slate editor factory.
import { createEditor, Editor, Transforms } from "slate";
// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";

import { socket } from "@/socket";
import { filterArray } from "@/helpers";
import { cn } from "@/lib/utils";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const getTypedMesages = (arr) => {
  return arr.map((item) =>
    item.children.map((child) => child.text.trim()).toString(),
  );
};

const ChatInputSection = () => {
  const { selectedUser } = useSelector((state) => state.chatRoom);

  const [editor] = useState(() => withReact(createEditor()));
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Get the current value of the Slate editor.
    const message = filterArray(getTypedMesages(editor.children));

    socket.emit("private message", {
      message,
      sender: socket.auth.userID,
      receiver: selectedUser?.id,
    });

    // clear the editor after sending
    Transforms.delete(editor, {
      at: {
        anchor: Editor.start(editor, []),
        focus: Editor.end(editor, []),
      },
    });
  };

  const handleEmojiSelect = (emoji) => {
    // setSelectedEmoji(emoji);
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
          <div className="relative chat-input-links me-2 hidden sm:block">
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
              onChange={getTypedMesages}
            >
              <Editable
                value={[]}
                onKeyDown={handleKeyDown}
                onChange={(e) => setMessage(e)}
                placeholder="Type your message..."
                className="px-4 py-2 w-full text-sm text-gray-900 border bg-white outline-none max-h-32 overflow-y-auto [scrollbar-width:thin] rounded-md placeholder:text-gray-600 dark:text-gray-100 dark:placeholder:text-gray-400 dark:bg-[#343434] dark:border-transparent"
              />
            </Slate>
          </div>

          <div className="flex ml-2">
            <button type="button" id="audio-btn" className="hidden sm:block">
              <i className="bx bx-microphone align-middle"></i>
            </button>
            <button type="submit" className="!text-[#3d70b2]">
              <i className="bx bxs-send text-sm sm:text-xl align-middle"></i>
            </>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatInputSection;
