import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatRoomList: [],
    chatMessages: [],
    selectedChatRoom: null,
    selectedChatMessage: null,
  },
  reducers: {
    setChatRoomList: (state, action) => {
      state.chatRoomList = action.payload;
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

export default chatSlice.reducer;
