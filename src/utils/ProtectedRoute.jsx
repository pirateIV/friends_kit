import App from "@/App";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import "@/assets/css/loader.css";

const ProtectedRoute = () => {
  const location = useLocation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  console.log(isAuthenticated);

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
