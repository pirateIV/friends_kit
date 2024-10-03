import { socket } from "@/socket";
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatRoom",
  initialState: {
    chatRoomUsers: [],
    selectedChatRoom: null,
    selectedChatMessage: null,
    selectedUser: null,
    showUserInfo: false,
    userMessages: [],
    conversations: {},
    sidebarOpen: true,
  },
  reducers: {
    setChatRoomUsers: (state, action) => {
      const roomUsers = action.payload;
      state.chatRoomUsers = roomUsers;
      console.log(state.chatRoomUsers);
    },
    setUserConnection: (state, action) => {
      const user = action.payload;

      if (user.id === state.selectedUser?.id) {
        state.selectedUser = { ...state.selectedUser, online: user.online };
      }

      state.chatRoomUsers = state.chatRoomUsers.map((u) => {
        if (u.id === user.userID) {
          return { ...u, online: user.online };
        } else {
          return u;
        }
      });
    },
    setUserConversations: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.userMessages = action.payload.filter(
          (message) => message.status !== "deleted",
        );
      } else if (
        typeof action.payload === "object" &&
        action.payload !== null
      ) {
        if (!state.userMessages.some((msg) => msg.id === action.payload.id)) {
          state.userMessages = [...state.userMessages, action.payload];
        }
      } else {
        console.error("Payload must be an array or an object");
      }

      state.chatRoomUsers
        .filter((user) => user.id !== socket.auth.userID)
        .forEach((user) => {
          const messagesPerUser = state.userMessages.filter((message) => {
            const { sender, receiver } = message;
            return user.id === sender || user.id === receiver;
          });

          const privateMessages = state.userMessages.filter((message) => {
            const { sender, receiver } = message;
            return sender === receiver;
          });

          state.conversations[user.id] = messagesPerUser;
          state.conversations[socket.auth.userID] = privateMessages;
        });
    },
    setUpdatedMessage: (state, action) => {
      const { id, user, actionType } = action.payload;

      if (actionType === "delete") {
        const message = state.conversations[user].find(
          (message) => message.id === id,
        );
        console.log(message);
      }
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setShowUserInfo: (state, action) => {
      state.showUserInfo = !state.showUserInfo;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const {
  setChatRoomUsers,
  setUserConnection,
  setSelectedUser,
  setShowUserInfo,
  setSidebarOpen,
  setConversations,
  setUpdatedMessage,
  setUserConversations,
} = chatSlice.actions;

export default chatSlice.reducer;
