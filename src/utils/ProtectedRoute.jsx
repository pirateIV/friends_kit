import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import "@/assets/css/loader.css";
import App from "@/App";
import NotificationRequest from "@/components/notifications/NotificationRequest";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const [initialCheck, setInitialCheck] = useState(true);

  useEffect(() => {
    if (initialCheck) {
      dispatch(getCurrentUser()).finally(() => setInitialCheck(false));
    }
  }, [dispatch, initialCheck]);

  if (loading || initialCheck) {
    return <div className="pageloader is-active"></div>;
  }

  return isAuthenticated ? (
    <>
      <NotificationRequest />
      <App>
        <Outlet />
      </App>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
