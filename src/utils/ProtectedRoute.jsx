import App from "@/App";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import "@/assets/css/loader.css";

const ProtectedRoute = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="pageloader is-active"></div>;
  }

  return isAuthenticated ? (
    <App>
      <Outlet />
    </App>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
