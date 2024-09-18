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
    userMessages: {},
  },
  reducers: {
    setChatRoomUsers: (state, action) => {
      const roomUsers = action.payload;

      // state.chatRoomUsers = roomUsers.map((user) => ({
      //   ...user,
      //   ...initReactiveProperties(user.id),
      // }));
      state.chatRoomUsers = roomUsers;
      console.log(socket.userID);
      console.log(state.chatRoomUsers);
      // state.chatRoomUsers = action.payload;
    },
    setUserConnection: (state, action) => {
      const user = action.payload;

      state.chatRoomUsers = state.chatRoomUsers.map((u) => {
        if (u.id === user.userID) {
          return { ...u, online: user.online };
        } else {
          return u;
        }
      });
    },

    setUserMessages: (state, action) => {
      const { userId, messages } = action.payload;
      state.userMessages[userId] = messages;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setSelectedChatRoom: (state, action) => {
      state.selectedChatRoom = action.payload;
    },
    setSelectedChatMessage: (state, action) => {
      state.selectedChatMessage = action.payload;
    },
    setShowUserInfo: (state, action) => {
      state.showUserInfo = !state.showUserInfo;
    },
  },
});

export const {
  setChatRoomUsers,
  setUserConnection,
  setSelectedUser,
  setShowUserInfo,
  setUserMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
