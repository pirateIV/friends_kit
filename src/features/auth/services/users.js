import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";

const getUser = async () => {
  const response = await axios.get(baseUrl);
  const data = await response.data;
  console.log(data);
};

const createUser = async (userData) => {
  const response = await axios.post(baseUrl, userData);
  console.log(response.data);
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { createUser, getAll };
