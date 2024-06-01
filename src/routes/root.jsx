import { getCurrentUser } from "@/features/auth/reducers/login/loginSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
  redirect,
} from "react-router-dom";

const Root = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  // useEffect(() => {
  //   redirect("/app");
  // }, [isAuthenticated, navigate, redirect]);

  // console.log(isAuthenticated);

  if (loading) {
    return <div className="pageloader is-active"></div>;
  }

  return <Outlet />;
};

export default Root;
