import { socket } from "@/socket";
import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatRoom",
  initialState: {
    chatRoomUsers: [],
    chatMessages: [],
    selectedChatRoom: null,
    selectedChatMessage: null,
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

    setChatMessages: (state, action) => {
      state.chatMessages = action.payload;
    },
    setSelectedChatRoom: (state, action) => {
      state.selectedChatRoom = action.payload;
    },
    setSelectedChatMessage: (state, action) => {
      state.selectedChatMessage = action.payload;
    },
  },
});

export const { setChatRoomUsers } = chatSlice.actions;

export default chatSlice.reducer;
