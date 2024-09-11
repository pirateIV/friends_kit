import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:5000";

export const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log("Socket Events: ", event, args);
});
