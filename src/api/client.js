export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://friends-kit-backend.onrender.com/api"
    : "http://localhost:5000/api";
