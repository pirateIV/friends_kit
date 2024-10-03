import { baseURL } from "@/api/client";
import axios from "axios";

const editMessage = async (id) => {
  const response = await axios.put(`${baseURL}/messages/${id}`);
};

const deleteMessage = async (id) => {
  const response = await axios.delete(`${baseURL}/messages/${id}`);
};

export default { deleteMessage };
