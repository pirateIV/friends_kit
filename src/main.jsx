import ReactDOM from "react-dom/client";

import store from "./app/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./routes/routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";

import "./index.css";
import { setTheme } from "./redux/reducers/themeReducer.js";
import { getAllUsers } from "./features/auth/reducers/users/usersSlice.js";

if (localStorage.theme === "dark") {
  document.documentElement.classList.add("dark");
  store.dispatch(setTheme("dark"));
} else {
  document.documentElement.classList.remove("dark");
  store.dispatch(setTheme("light"));
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>,
);
