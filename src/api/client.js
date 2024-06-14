import axios from "axios";

const baseURL = "http://localhost:5000/api";

const clientApi = axios.create({
  baseURL,
  params,
});

export default clientApi;
