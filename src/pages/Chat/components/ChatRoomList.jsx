import ChatMessageList from "./ChatMessageList";

const ChatRoomList = () => (
  <div className="chat-room-list">
    <div id="chat-room-favourites">
      <h5 className="uppercase mt-4 mb-3 px-4 text-11 text-slate-600 font-semibold">
        Favourites
      </h5>
      <p className="px-4 py-2 text-sm text-gray-400 ms-2">
        <em>No favourites yet.</em>
      </p>
    </div>

    <div id="chat-room-direct-messages">
      <h5 className="uppercase mt-4 mb-3 px-4 text-11 text-slate-600 font-semibold">
        Direct Messages
      </h5>
      {/* Direct Messages List */}
      <ChatMessageList />
    </div>
  </div>
);

export default ChatRoomList;
